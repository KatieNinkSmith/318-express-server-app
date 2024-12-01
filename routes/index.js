const express = require("express");
const router = express.Router();
const users = require("../data/users.js");
console.log(users);
// localhost:3000/

router.route("/").get((req, res) => {
  res.render("index", { users });
});

// redirect to user sign up/sign in

// redirect to "your" profile with sign in barrier

module.exports = router;
