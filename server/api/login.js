const app = require("../server");
const router = require("express").Router();
const passport = require("passport");
const flash = require("express-flash");
const { genPassword } = require("../../config/passwordUtils");
const { db } = require("../db/db");
const session = require("express-session");
const { User } = require("../db/models");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sessionStore = new SequelizeStore({ db });
require("../../config/passport");

router.use(flash());

router.get("/", (req, res, next) => {
  try {
    console.log("we're in login");
    res.status(200).json({
      name: "guzel",
      password: "todo",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post(
  "/register",
  // passport.authenticate("local"),
  async (req, res, next) => {
    console.log("it is a new user", req.body);
    const saltHash = genPassword(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;
    try {
      const newUser = await User.create({
        username: req.body.email,
        hash,
        salt,
        admin: true,
      });
      // console.log("new user", newUser);
      // res.json -- in this case tries to configure the header, and it is not a coorect way to do for post request
      // res.json is for get request
      // res.json(201).json({
      //   status: "success",
      //   data: {
      //     user: newUser,
      //   },
      // });
      // res.send sends respond to front-end saying that new info was inserted into the table correctly
      res.send(newUser);
      // res.redirect("/auth");
    } catch (err) {
      console.log("register error", err);
      // return err;
      next(err);
    }
  }
);

router.use(
  session({
    secret: "secret from router",
    // don't save session if something is changed
    resave: false,
    saveUninitialized: false,
    // sessionStore should save session to session table in database
    // store: sessionStore,
    // cookie: {
    //   // path: "/",
    //   // secure: false,
    //   maxAge: 1000 * 60 * 60 * 2,
    //   // httpOnly: true,
    //   // maxAge: null,
    // },
  })
);
router.use(passport.initialize());
router.use(passport.session());

// (req, res, next) => {
//   console.log("in passport middleware", req.sessionID);
//   next();
// });
// console.log("passport.session", session);
// sessionStore.sync();

router.post(
  "/login",
  passport.authenticate(
    "local"
    // {
    //   // failureRedirect: "/login",
    //   successRedirect: "/auth",
    //   failureFlash: true,
    // }),
  ),
  (req, res, next) => {
    console.log("we are in login route");

    // res.redirect("/auth");
    res.send(req.body);
    next();
  }
);

router.get("/auth", (req, res, next) => {
  console.log("you're in auth", req.body);
  // res.send(req.body);
});

// router.get("/yes", (req, res, next) => {
//   try {
//     console.log("we're in yes");
//     res.status(200).json({
//       name: "guzelka",
//       password: "todos",
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// });

module.exports = router;
