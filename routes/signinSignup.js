const express = require("express");
const router = express.Router();
// localhost:3000/hoilday
router.get("/", (req, res) => {
  res.render("signinsignup", { title: "Hobby Home Sign in" });
});

// render sign in sign up

// redirect to "your" profile

module.exports = router;
