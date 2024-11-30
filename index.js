const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index.js");
const data1Router = require("./routes/data1.js");
const data2Router = require("./routes/data2.js");
const data3Router = require("./routes/data3.js");

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
app.use("/data1", data1Router);
app.use("/data2", data2Router);
app.use("/data3", data3Router);

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.get("/data1", (req, res) => {
  res.send(req.body);
});
app.put("/addUser/:id/:user/:age/:color/:food/:hobby/:movie/:music");
app.get("/data2", (req, res) => {
  res.send(req.body);
});
app.get("/data3", (req, res) => {
  res.send(req.body);
});
// 404 error
app.use((req, res) => {
  console.log("Error: Oh no my table its broken!");
  res.status(404);
  res.json({ error: "Resource not found" });
});
app.listen(PORT, () => {
  console.log("Listen, Linda listen");
});
