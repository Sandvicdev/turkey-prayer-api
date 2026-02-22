const express = require('express');
const router = express.Router();
const { getPrayerTimesByLocation } = require("../services/location.service");

// GET /vakit?city=Sivas (city opsiyonel)
router.get('/', async (req, res) => {
  try {
    const city = req.query.city;
    const ip = req.ip; // Express IP, gerçek kullanıcı IP’si için proxy ayarına dikkat
    const data = await getPrayerTimesByLocation(city, ip);

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;