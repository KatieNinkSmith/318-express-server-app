const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");
const bodyParser = require("body-parser");
const userData = require("./data/users.js");
const postData = require("./data/post.js");
const commentsData = require("./data/comments.js");
const indexRouter = require("./routes/index.js");
const signupRouter = require("./routes/signinSignup.js");
const viewpostsRouter = require("./routes/viewPosts.js");
const profileRouter = require("./routes/profile.js");

const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.js");

// To read data from file
const readUsers = () => {
  delete require.cache[require.resolve(usersFilePath)];
  return require(usersFilePath);
};

// To write data from file
const writeUsers = (users) => {
  const usersContent = `const users = ${JSON.stringify(users, null, 4)}`;
  fs.writeFileSync(usersFilePath, usersContent, "utf8");
};

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
// console.log(userIdCounter);
// Route to handle form submission
app.post("/register", (req, res) => {
  console.log(req.body);
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
  console.log(userData);
  console.log(user);
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

// 404 error
app.use((req, res) => {
  console.log("Error: Oh no my table its broken!");
  res.status(404).render("404", { error: "Resource not found" });
});
app.listen(PORT, () => {
  console.log("Listen, Linda listen");
});
