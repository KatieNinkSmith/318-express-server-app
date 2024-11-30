const express = require("express");
const router = express.Router();
// localhost:3000/hoilday
router.get("/", (req, res) => {
  res.render("data1", { title: "Users" });
});

module.exports = router;
