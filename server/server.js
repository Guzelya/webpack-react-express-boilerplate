"use strict";
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const { db } = require("./db/db");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sessionStore = new SequelizeStore({ db });
const passport = require("passport");
// const volleyball = require("volleyball");

const app = express();

// logging middleware
// app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// static middleware
// app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));

// include our routes!
app.use("/api", require("./api"));

// Send index.html for any other requests
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// const SyncSession = async () => {
//   // db.sync()  --> creates database if it doesn't exist
//   await db.sync();
//   await sessionStore.sync();
// };

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// app.listen(3002, () => {
//   console.log(`server is on Port 18`);
// });

// app.use(
//   // "/v2",
//   session({
//     // proxy: true,
//     secret: "connection session to database",
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       // path: "/",
//       // secure: false,
//       maxAge: 1000 * 60 * 60 * 2,
//       // httpOnly: true,
//       // maxAge: null,
//     },
//   })
//   // console.log("session connected!")
// );

// app.get("/session", (req, res, next) => {
//   // res.cookie("remember me");
//   // keep in mind!!! weird thing, session cookies are not seen in chrome and are not
//   // inserted into the database until viewCount is trigerred
//   // if (!req.session.viewCount) {
//   //   req.session.viewCount = 1;
//   // } else {
//   //   req.session.viewCount++;
//   // }
//   // res.send(`you have visited this website ${req.session.viewCount} times`);
//   // console.log("in console session", req.sessionID, req.session.viewCount);
//   console.log("/session console log");
//   next();
// });

// sessionStore.sync();
// SyncSession();
// const callFunction = function (req, res, next) {
//   console.log("function called");
//   next();
// };

require("../config/passport");
app.use(passport.initialize());
app.use(passport.session());

// app.use((req, res, next) => {
//   console.log("session in use", req.session);
//   console.log("session in use user", req.user);
//   next();
// });

sessionStore.sync();

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
