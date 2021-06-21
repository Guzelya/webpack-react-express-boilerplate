"use strict";
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const { db } = require("./db/db");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sessionStore = new SequelizeStore({ db });
const passport = require("passport");
require("../config/passport");

const app = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "pupsik",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

// this middleware registers passport with express.
// it will not work without passport file imported from confog file require("../config/passport");
// it depends on serialize and deserialize
app.use(passport.initialize());
app.use(passport.session());

// include our routes!
app.use("/api", require("./api"));

// static middleware
// app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));

// Send index.html for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// error handling middleware should come last because middleware is executed from top to bottom
// if there's an error it will catch on it. If it comes first it will show error even if there's no one
app.use((err, req, res, next) => {
  // res.json(there's an error, {err: err})  --> is a much better solution, because json renders error on the front-end
  if (err) {
    console.log("there is an error");
  }
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
  next();
});

// sessionStore.sync();

module.exports = app;
