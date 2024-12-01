const express = require("express");
const router = express.Router();
const posts = require("../data/post.js");
// console.log(postData);
const comments = require("../data/comments.js");
// console.log(commentsData);
// localhost:3000/posts
router.get("/", (req, res) => {
  res.render("viewposts", { posts, comments, title: "Posts" });
});
// router
//   .put //figure out what i want to put
//   ();
// render all posts filter by key hobby words

// render comments for only post id

// render comments only by "original poster"

module.exports = router;
