const express = require("express");
const medicines = require("../data/medicines");

const router = express.Router();

// GET /api/medicines?category=Oncology
router.get("/", (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = medicines.filter(
      (m) => m.category.toLowerCase() === String(category).toLowerCase()
    );
    return res.json(filtered);
  }
  res.json(medicines);
});

router.get("/categories", (req, res) => {
  const categories = [...new Set(medicines.map((m) => m.category))];
  res.json(categories);
});

router.get("/:slug", (req, res) => {
  const medicine = medicines.find((m) => m.slug === req.params.slug);
  if (!medicine) {
    return res.status(404).json({ error: "Medicine not found" });
  }
  res.json(medicine);
});

module.exports = router;
