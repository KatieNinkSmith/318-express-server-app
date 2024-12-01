const express = require("express");
const router = express.Router();
// localhost:3000/404

router.route("/").get((req, res) => {
  res.render("404");
});

// redirect to user sign up/sign in

// redirect to "your" profile with sign in barrier

module.exports = router;
