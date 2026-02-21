const axios = require("axios");

console.log("RAMADAN SERVICE YÜKLENDİ ✅");

async function isRamadan() {
  const response = await axios.get(
    "https://api.aladhan.com/v1/gToH"
  );

  const monthNumber = response.data.data.hijri.month.number;

  return monthNumber === 9;
}

module.exports = { isRamadan };