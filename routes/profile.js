const express = require("express");
const router = express.Router();
const userData = require("../data/users.js");
// localhost:3000/profile
// console.log(userData);
router.get("/", (req, res) => {
  res.render("profile", {
    user: " ",
    color: " ",
    food: " ",
    hobby: " ",
    movie: " ",
    music: " ",
  });
});
router.get("/:user", (req, res) => {
  // console.log(req.params.user, "i like to eat apples and bananas");
  const userdata = userData.find((user) => user.user === req.params.user);
  // console.log(userdata);
  // Render the profile page with the user's data
  res.render("profile", {
    user: userdata.user,
    color: userdata.color,
    food: userdata.food,
    hobby: userdata.hobby,
    movie: userdata.movie,
    music: userdata.music,
  });
});
router.delete("/", (req, res) => {
  const user = req.params.user;
  console.log(user);
  const userInfo = userData.find((user) => user === req.params.user);
  console.log(userInfo);
  userData.splice(userInfo, 1);
  console.log(userData);
  res.redirect("/profile");
});

router.patch("/", (req, res) => {
  const { user, color, food, hobby, movie, music } = req.body;
  console.log(req.body);
  // Find the user in the data array
  const userdata = userData.find((u) => u.user === user);
  console.log(userdata);
  if (!userdata) {
    return res.status(404).render("404", { error: "Resource not found" });
  }
  // Update only the provided fields to prevent overwriting missing data
  if (color) userdata.color = color;
  if (food) userdata.food = food;
  if (hobby) userdata.hobby = hobby;
  if (movie) userdata.movie = movie;
  if (music) userdata.music = music;
  console.log(userdata);
  // Send a response or redirect
  res.redirect(`/profile/${user}`);
});
// render only your posts
// render other users post with only "your" comments
// options to edit your profile only
// options to edit "your" posts or comments, do not allow editing of other users

module.exports = router;
