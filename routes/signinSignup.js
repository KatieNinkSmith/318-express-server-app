const express = require("express");
const router = express.Router();
const userData = require("../data/users.js");

// localhost:3000/signinsignup
router.get("/", (req, res) => {
  res.render("signinsignup", { title: "Hobby Home" });
});

// render sign in sign up

// create a new user
// redirect to "your" profile

module.exports = router;
