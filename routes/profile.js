const express = require("express");
const router = express.Router();
// localhost:3000/profile
const users = require("../data/users.js");
// console.log(userData);
router.get("/", (req, res) => {
  // change your profile to the user's name and only display their info cased on name entered in sign in input
  res.render("profile", { users, title: users.user });
});

// router.post("/submit", (req, res) => {
//   res.render(
//     "profile",
//     (user.value, color.value, food.value, hobby.value, movie.value, music.value)
//   );
// });
// render only your posts
// render other users post with only "your" comments
// options to edit your profile only
// options to edit "your" posts or comments, do not allow editing of other users

module.exports = router;
