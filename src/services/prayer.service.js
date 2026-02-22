const prayer = require('adhan-time-turkiye');
const cityToPlate = require("../../turkiye_il_plakalar.json"); // 81 ilin plaka JSON'u

function getPlateByCityName(cityName) {
  if (!cityName) return null;
  const cityEntry = Object.entries(cityToPlate).find(
    ([name, plate]) =>
      name.toLocaleLowerCase('tr-TR') === cityName.toLocaleLowerCase('tr-TR')
  );
  return cityEntry ? cityEntry[1] : null;
}

async function getPrayerTimes(input) {
  try {
    if (!input) throw new Error('Plaka veya şehir bilgisi gerekli');

    // input sayı mı? plaka olarak alıyoruz, yoksa şehir adıyla eşleştir
    const plate = !isNaN(input) ? Number(input) : getPlateByCityName(input);
    if (!plate) throw new Error('Bilinmeyen şehir veya plaka');

    const information = await prayer.times({ plate });

    return {
      place: information.place,
      times: information.times,
      remainingTimes: information.remainingTimes,
    };
  } catch (err) {
    throw new Error(`Namaz vakitleri alınamadı: ${err.message}`);
  }
}

module.exports = { getPrayerTimes };