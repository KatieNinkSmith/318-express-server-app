const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const userData = require("./data/users.js");
const postData = require("./data/post.js");
const commentsData = require("./data/comments.js");
const indexRouter = require("./routes/index.js");
const signupRouter = require("./routes/signinSignup.js");
const viewpostsRouter = require("./routes/viewposts.js");
const profileRouter = require("./routes/profile.js");

//

// middleware
app.use((req, res, next) => {
  const time = new Date();
  console.log(`----${time.toLocaleString()}: ${req.method} at ${req.url}`);
  next();
});

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use("/", indexRouter);
app.use("/signupsignin", signupRouter);
app.use("/viewposts", viewpostsRouter);
app.use("/profile", profileRouter);
// console.log(userIdCounter);
// Route to handle form submission
app.post("/register", (req, res) => {
  // console.log(req.body);
  // rewrite to "user: req.body.user" and so on then console.log
  const { user, color, food, hobby, movie, music } = req.body;
  // Check if the username or email already exists in the hardcoded data
  const userExists = userData.some(
    (existingUser) => existingUser.user === user
  );
  if (userExists) {
    return res.render("signinsignup", {
      message: "User already exists",
      error: true,
    });
  }
  // Add new user to the array (simulating user registration)
  const newUser = {
    user: user,
    color: color,
    food: food,
    hobby: hobby,
    movie: movie,
    music: music,
  };
  userData.push(newUser);
  // console.log(userData);
  // console.log(user);
  // Redirect to the profile page with the user's information
  res.redirect(`/profile/${user}`);
});
app.get("/signin", (req, res) => {
  const user = req.query.user;
  const userExists = userData.some(
    (existingUser) => existingUser.user === user
  );
  if (!userExists) {
    return res.render("signinsignup", {
      message: "User does not exists, please sign up!",
      error: true,
    });
  }
  res.redirect(`/profile/${user}`);

  // console.log(user);
});
app.post("/compose", (req, res) => {
  const { id, user_id, title, content } = req.body;
  console.log(req.body);
  for (i = 0; i < postData.length; i++) {
    console.log(postData[i]);
  }

  const newPost = {
    id: " ",
    user_id: " ",
    title: title,
    content: content,
  };
  console.log(newPost);
  postData.push(newPost);
  res.redirect("/viewposts");
});
// 404 error
app.use((req, res) => {
  console.log("Error: Oh no my table its broken!");
  res.status(404).render("404", { error: "Resource not found" });
});
app.listen(PORT, () => {
  console.log("Listen, Linda listen");
});
