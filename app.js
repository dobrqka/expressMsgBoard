const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
// const newRouter = require("./routes/newRouter");
const PORT = 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
// app.use("/new", newRouter);

app.listen(PORT, () => {
  console.log("I'm listening.");
});
