const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
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

app.set("views", "views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.static("public"));
app.use("/", indexRouter);
app.use("/signupsignin", signupRouter);
app.use("/viewposts", viewpostsRouter);
app.use("/profile", profileRouter);

// app.get("/user", (req, res) => {
//   res.send(req.params.user);
// });
// app.get("/posts/:id", (req, res) => {
//   res.send(req.params.post_id);
// });
// app.get("/post/:id/:comments", (req, res) => {
//   res.send(req.params.params);
// });
// app.put("/:post", (req, res) => {
//   req.send(res.params);
// });
// app.put("/:comments", (req, res) => {
//   req.send(res.params);
// });
// 404 error
app.use((req, res) => {
  console.log("Error: Oh no my table its broken!");
  res.status(404);
  res.json({ error: "Resource not found" });
});
app.listen(PORT, () => {
  console.log("Listen, Linda listen");
});
