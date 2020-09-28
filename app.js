require("dotenv").config();
const path = require("path");
const express = require("express");
const createError = require("http-errors");
const logger = require("morgan");
const favicon = require("serve-favicon");

const hbs = require("hbs");

// Routers
const indexRouter = require("./routes/index.routes");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
hbs.registerPartials(__dirname + "/views/partials");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const app_name = require("./package.json").name;

// Routes middleware
app.use("/", indexRouter);

// Catch missing routes and forward to error handler
app.use((req, res, next) => next(createError(404)));

// Catch all error handler
app.use((error, req, res) => {
  // Set error information, with stack only available in development
  res.locals.message = error.message;
  res.locals.error = req.app.get("env") === "development" ? error : {};

  // render the error page
  res.status(error.status || 500);
  res.render("error");
});

module.exports = app;
