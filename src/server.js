const express = require('express');
const app = express();
const vakitRoutes = require("./routes/vakit.routes");

app.use('/api/vakit', vakitRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server çalışıyor 🚀 http://localhost:${PORT}`);
});