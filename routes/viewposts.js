const express = require("express");
const router = express.Router();
// localhost:3000/hoilday
router.get("/", (req, res) => {
  res.render("viewposts", { title: "Posts" });
});

// render all posts filter by key hobby words

// render comments for only post id

// render comments only by "original poster"

module.exports = router;
