const express = require("express");
const cors = require("cors");

const companyRouter = require("./routes/company");
const medicinesRouter = require("./routes/medicines");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/company", companyRouter);
app.use("/api/medicines", medicinesRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

module.exports = app;
