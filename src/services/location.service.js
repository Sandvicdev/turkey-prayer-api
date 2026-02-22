const axios = require('axios');
const { getPrayerTimes } = require('./prayer.service');
const cityToPlate = require("../../turkiye_il_plakalar.json"); // 81 ilin plaka JSON'u

// IP’den şehir bul
async function getCityFromIP(ip) {
  try {
    const res = await axios.get(`http://ip-api.com/json/${ip}?fields=city`);
    return res.data.city; // city string döner, örn: "Istanbul"
  } catch (err) {
    return null;
  }
}

// City → Plate
function getPlateByCityName(cityName) {
  if (!cityName) return null;
  const cityEntry = Object.entries(cityToPlate).find(
    ([name, plate]) =>
      name.toLocaleLowerCase('tr-TR') === cityName.toLocaleLowerCase('tr-TR')
  );
  return cityEntry ? cityEntry[1] : null;
}

// Ana fonksiyon
async function getPrayerTimesByLocation(city, ip) {
  try {
    // city boş veya undefined ise null yap
    if (!city || city.trim() === '') city = null;

    let plate;

    if (city) {
      plate = getPlateByCityName(city);
    } else {
      // city yoksa IP’den al
      const detectedCity = await getCityFromIP(ip);
      plate = getPlateByCityName(detectedCity);
    }

    if (!plate) throw new Error('Bilinmeyen şehir veya plaka');

    return await getPrayerTimes(plate);
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = { getPrayerTimesByLocation };