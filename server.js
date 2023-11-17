require("dotenv").config();
const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan("dev"));

app.engine(".hbs", hbs.engine({ extname: ".hbs" }));

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "templates"));

app.get("/", (req, res) => {
  res.render("home", {
    title: process.env.TITLE || "What will you build?",
  });
});

app.listen(port, () => {
  console.log(`Deployatron server is running on port ${port}`);
});

process.on("SIGINT", function () {
  console.log("Shutting down from SIGINT (Ctrl-C)");
  process.exit(0);
});
