const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const userData = require("./data/users.js");
const postData = require("./data/post.js");
const commentsData = require("./data/comments.js");
const indexRouter = require("./routes/index.js");
const signupRouter = require("./routes/signinSignup.js");
const viewpostsRouter = require("./routes/viewPosts.js");
const profileRouter = require("./routes/profile.js");

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
app.use("/", indexRouter);
app.use("/signupsignin", signupRouter);
app.use("/viewposts", viewpostsRouter);
app.use("/profile", profileRouter);
let id = userData.length + 1;
// console.log(userIdCounter);
// Route to handle form submission
app.post("/register", (req, res) => {
  console.log(req.body);
  const { id, user, password, age, color, food, hobby, movie, music } =
    req.body;

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
    id: id,
    user: user,
    password: password,
    age: age,
    color: color,
    food: food,
    hobby: hobby,
    movie: movie,
    music: music,
  };
  userData.push(newUser);
  // Redirect to the profile page with the user's information
  res.redirect(`/profile/${user}`);
});

// Route to display the profile page
app.get("/profile/:username", (req, res) => {
  const { username } = req.params;

  // Find the user by username
  const user = userData.find((user) => user.username === username);

  // Render the profile page with the user's data
  res.render("profile", {
    id: id,
    user: user,

    color: color,
    food: food,
    hobby: hobby,
    movie: movie,
    music: music,
  });
});

// 404 error
app.use((req, res) => {
  console.log("Error: Oh no my table its broken!");
  res.status(404).render("404", { error: "Resource not found" }); // Assuming you have a 404.ejs page.
});
app.listen(PORT, () => {
  console.log("Listen, Linda listen");
});
