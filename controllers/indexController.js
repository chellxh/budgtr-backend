const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("📈 Welcome to Budgtr API 📉");
});

module.exports = router;
