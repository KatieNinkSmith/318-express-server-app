const express = require("express");
const router = express.Router();
// localhost:3000/hoilday
router.get("/", (req, res) => {
  res.render("signinsignup", { title: "Hobby Home" });
});
router.post("/", (req, res) => {
  const { user, color, food, hobby, movie, music } = req.body;
  console.log(
    user.value,
    color.value,
    food.value,
    hobby.value,
    movie.value,
    music.value
  );
  res.render("/submit/profile");
});

// render sign in sign up

// redirect to "your" profile

module.exports = router;
