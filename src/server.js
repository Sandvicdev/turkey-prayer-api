const express = require('express');
const cors = require('cors'); // ✨ CORS paketi
const app = express();
const vakitRoutes = require("./routes/vakit.routes");

// CORS ayarı
app.use(cors()); // Tüm domainlerden gelen isteklere izin verir
// Eğer sadece belirli domainlere izin vermek istersen:
// app.use(cors({ origin: 'http://localhost:5500' }));

// JSON body parse
app.use(express.json());

// Route
app.use('/api/vakit', vakitRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server çalışıyor 🚀 http://localhost:${PORT}`);
});
