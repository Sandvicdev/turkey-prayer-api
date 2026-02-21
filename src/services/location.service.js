const axios = require("axios");

async function isRamadan() {
  const response = await axios.get("http://api.aladhan.com/v1/gToH");
  const month = response.data.data.hijri.month.en;
  return month === "Ramadan";
}

module.exports = { isRamadan };