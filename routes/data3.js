const express = require("express");
const router = express.Router();
// localhost:3000/hoilday
router.get("/", (req, res) => {
  res.render("data3", { title: "Comments" });
});

module.exports = router;
