require("dotenv").config();
const express = require("express");
const cors = require("cors");

const vakitRoutes = require("./routes/vakit.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", vakitRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});