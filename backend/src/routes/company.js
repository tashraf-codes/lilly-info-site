const express = require("express");
const company = require("../data/company");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(company);
});

module.exports = router;
