"use strict";
const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");
// const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
// const { db } = require("./db/db");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const sessionStore = new SequelizeStore({ db });
require("../config/passport");
const passport = require("passport");
// const { User } = require("./db/models/user");
// const strategy = require("../config/strategy");

// initializePassport(passport);
require("./passportConfig")(passport);

const app = express();

// static middleware
// app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors);

app.use(cookieParser());
app.use(
  session({
    secret: "pupsik",
    // store: sessionStore,
    resave: true,
    saveUninitialized: true,
    // cookie: {
    //   secure: false,
    //   maxAge: 3600000, //1 hour
    // },
  })
);

// this middleware registers passport with express.
// it will not work without passport file imported from config file require("../config/passport");
// it depends on serialize and deserialize
app.use(passport.initialize());
app.use(passport.session());
// passport.use(strategy);
// require("./passportConfig")(passport);

// include our routes!
app.use("/api", require("./api"));

// Send index.html for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// serialize decides what to store in the session. In this case user is stored
// user will be attached as req.session.passport.user
// passport.serializeUser((user, done) => {
//   // save user id , by the help of done function
//   console.log("step 1 serialized");
//   done(null, user.id);
// });
// // deserialize is used to retrieve data from session
// passport.deserializeUser(async (id, done) => {
//   // console.log("user in deserialized", user);
//   try {
//     const user = await User.findOne({
//       where: {
//         id,
//       },
//     });
//     console.log("step 2 in deserialized", user.id);
//     return done(null, user);
//   } catch (err) {
//     return done(err);
//   }
// });

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
