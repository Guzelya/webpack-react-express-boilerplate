const app = require("../server");
const router = require("express").Router();
const passport = require("passport");
const flash = require("express-flash");
const { genPassword } = require("../../config/passwordUtils");
const { User } = require("../db/models");

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
      res.send(newUser);
      // res.redirect("/auth");
    } catch (err) {
      console.log("register error", err);
      // return err;
      next(err);
    }
  }
);

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  console.log("we are in login route");

  // res.redirect("/auth");
  res.send(req.body);
  next();
});

router.get("/auth", (req, res, next) => {
  console.log("you're in auth", req.body);
  res.send(req.body);
});

// Visiting this route logs the user out
router.get("/logout", (req, res, next) => {
  console.log("youre in logout");
  req.logout();
  req.session.destroy();
  res.send("you are successfully logged out");
  // res.redirect("/protected-route");
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

function isAuth(req, res, next) {
  console.log("called in isAuth");
  if (req.isAuthenticated()) {
    console.log("get in");
    return next();
  }
  console.log("get out");
  // res.json({ redirectUrl: "/login" });
  // redirect happens on front end
  return res.redirect("/");
}

function notAuth(req, res, next) {
  console.log("called in notAuth");
  if (req.isAuthenticated()) {
    return res.redirect("/auth");
  }
  next();
}

module.exports = router;
