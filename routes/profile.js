const express = require("express");
const router = express.Router();
const userData = require("../data/users.js");
// localhost:3000/profile
// console.log(userData);

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
  const index = userData.findIndex((user) => user.user === user);
  console.log(index);

  userData.splice(index, 1);
  console.log(userData);
  res.send("User deleted successfully");
});
// render only your posts
// render other users post with only "your" comments
// options to edit your profile only
// options to edit "your" posts or comments, do not allow editing of other users

module.exports = router;
