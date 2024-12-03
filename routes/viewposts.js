const express = require("express");
const router = express.Router();
const posts = require("../data/post.js");
console.log(posts);
const comments = require("../data/comments.js");
// console.log(commentsData);
// localhost:3000/posts
router.get("/", (req, res) => {
  res.render("viewposts", { posts, comments, title: "Posts" });
});
// post method to accept input and log it just to be sure it works
router.post("/", (req, res) => {
  const { id, user_id, title, content } = req.body;
  console.log(req.body);
  const newPost = {
    id: id++,
    user_id: user.id,
    title: title,
    content: content,
  };
  console.log(newPost);
  postData.push(newPost);
  res.redirect("/viewposts");
});
// router
//   .put //figure out what i want to put
//   ();
// render all posts filter by key hobby words

// render comments for only post id

// render comments only by "original poster"

module.exports = router;
