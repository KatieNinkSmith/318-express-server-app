const express = require("express");
const router = express.Router();
// localhost:3000/hoilday
router.get("/", (req, res) => {
  res.render("data2", { title: "Posts" });
});

module.exports = router;
