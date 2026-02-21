const axios = require("axios");

console.log("PRAYER SERVICE YÜKLENDİ ✅");

async function getPrayerTimes(city) {
  console.log("getPrayerTimes çağrıldı, şehir:", city);

  const response = await axios.get(
    "https://api.aladhan.com/v1/timingsByCity",
    {
      params: {
        city,
        country: "Turkey",
        method: 13
      }
    }
  );

  console.log("API RESPONSE GELDİ ✅");

  console.log("TIMINGS:", response.data.data.timings);

  return response.data.data.timings;
}

module.exports = { getPrayerTimes };