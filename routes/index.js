const express = require("express");
const router = express.Router();
// localhost:3000/hoilday
router.get("/", (req, res) => {
  res.render("index", { title: "Hobby Home" });
});

// redirect to user sign up/sign in

// redirect to "your" profile with sign in barrier

module.exports = router;
