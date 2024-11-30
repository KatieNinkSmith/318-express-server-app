const express = require("express");
const router = express.Router();
// localhost:3000/hoilday
router.get("/", (req, res) => {
  res.render("profile", { title: "Your Profile" });
});

// render only your posts
// render other users post with only "your" comments
// options to edit your profile only
// options to edit "your" posts or comments, do not allow editing of other users

module.exports = router;
