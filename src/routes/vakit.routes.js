const express = require("express");
const router = express.Router();

const { getPrayerTimes } = require("../services/prayer.service");
const { isRamadan } = require("../services/ramadan.service");
const { getCityFromIP } = require("../services/location.service");
const { calculateCountdown } = require("../utils/countdown");

router.get("/vakitler", async (req, res) => {
  try {
    console.log("----- YENİ İSTEK GELDİ -----");

    let { sehir } = req.query;
    console.log("Query şehir:", sehir);

    if (!sehir) {
      const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
      console.log("IP:", ip);

      sehir = await getCityFromIP(ip);
      console.log("IP'den gelen şehir:", sehir);
    }

    console.log("getPrayerTimes tipi:", typeof getPrayerTimes);

    const timings = await getPrayerTimes(sehir);

    console.log("TIMINGS RESULT:", timings);

    const ramazanMi = await isRamadan();
    console.log("Ramazan mı:", ramazanMi);

    const geriSayim = calculateCountdown(timings.Maghrib);
    console.log("Geri sayım:", geriSayim);

    res.json({
      sehir,
      ramazan: ramazanMi,
      imsak: timings.Fajr,
      iftar: timings.Maghrib,
      geriSayim
    });

  } catch (err) {
    console.error("🔥 HATA DETAY:", err);
    res.status(500).json({
      error: "Bir hata oluştu",
      detay: err.message
    });
  }
});

module.exports = router;