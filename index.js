const express = require("express");
const app = express();
const PORT = 3000;
// const path = require("path");
const userData = require("./data/users.js");
// console.log(userData);
const postData = require("./data/post.js");
// console.log(postData);
const commentsData = require("./data/comments.js");
// console.log(commentsData);
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index.js");
const signupRouter = require("./routes/signinSignup.js");
const viewpostsRouter = require("./routes/viewPosts.js");
const profileRouter = require("./routes/profile.js");

// middleware
app.use((req, res, next) => {
  const time = new Date();
  console.log(`----${time.toLocaleDateString}: ${req.method} at ${req.url}`);
  next();
});
indexRouter.route("/").get((req, res) => {
  res.render("index", { userData });
});
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.json("data"));
app.use("/", indexRouter);
app.use("/signupsignin", signupRouter);
app.use("/viewposts", viewpostsRouter);
app.use("/profile", profileRouter);

// 404 error
app.use((req, res) => {
  console.log("Error: Oh no my table its broken!");
  res.status(404);
  res.json({ error: "Resource not found" });
});
app.listen(PORT, () => {
  console.log("Listen, Linda listen");
});
