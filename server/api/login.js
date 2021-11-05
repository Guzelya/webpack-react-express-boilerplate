const app = require("../server");
const router = require("express").Router();
const passport = require("passport");
// const flash = require("express-flash");
const { genPassword } = require("../../config/passwordUtils");
const { validPassword } = require("../../config/passwordUtils");
// const validPassword = require("../config/passwordUtils").validPassword;
const { User } = require("../db/models");

// router.use(flash());

router.get("/", (req, res, next) => {
  try {
    console.log("we're in login");
    // res.status(200).json({
    //   name: "guzel",
    //   password: "todo",
    // });
    res.send("welcome to website!");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/register", (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    console.log("user in register", user);
    if (err) throw err;
    try {
      const User1 = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
      console.log("inside register route", User1);
      if (!User1) {
        console.log("user does not exist");
        const saltHash = genPassword(req.body.password);
        const salt = saltHash.salt;
        const hash = saltHash.hash;
        const newUser = await User.create({
          username: req.body.username,
          password: req.body.password,
          salt,
          hash,
          admin: true,
        });
        console.log("newUser", newUser);
        req.logIn(newUser, (err) => {
          if (err) throw err;
          // res.send("Successfully Authenticated");
          console.log("req.logIn", req.user);
          res.status(200).send("you're logged in");
        });
        // res.send(newUser);
      } else {
        console.log("user already exists, please login");
      }
    } catch (err) {
      console.log("error here", err);
    }
  })(req, res, next);
});

// router.post(
//   "/register",
//   // passport.authenticate("local"),
//   async (req, res, next) => {
//     console.log("it is a new user", req.body);
//     const saltHash = genPassword(req.body.password);
//     const salt = saltHash.salt;
//     const hash = saltHash.hash;
//     try {
//       const newUser = await User.create({
//         username: req.body.email,
//         hash,
//         salt,
//         admin: true,
//       });
//       res.send(newUser);
//       // res.redirect("/auth");
//     } catch (err) {
//       console.log("register error", err);
//       // return err;
//       next(err);
//     }
//   }
// );

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log("user", user);
    if (err) throw err;
    if (!user) res.status(401).send("failute to log in");
    else {
      // const isValid = validPassword(user.password, user.hash, user.salt);
      // console.log('step 1', user);
      // if (isValid) {
      req.logIn(user, (err) => {
        if (err) throw err;
        // res.send("Successfully Authenticated");
        res.status(200).send("you're logged in");
        console.log("req.logIn", req.user);
      });
      // } else {
      //   res.send("password is incorrect");
      // }
    }
  })(req, res, next);
});

router.get("/login", isAuth, (req, res, next) => {
  if (req.user) {
    res.status(200).send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  } else {
    res.status(403).send("access forbidden");
  }
});

// router.post("/login", passport.authenticate("local"), (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) throw err;
//     if (!user) res.send("No User Exists");
//     else {
//       req.logIn(user, (err) => {
//         if (err) throw err;
//         console.log("inside logIn", req.session);
//         res.send("success");
//         // return;
//       });
//     }
//   })(req, res, next);
// });
// console.log("we are in login route", req.body);
// const user = req.body;
// if (req.body) {
//   req.logIn(user, (err) => {
//     if (err) throw err;
//     res.send(req.body);
//   });
// }
// console.log("passport", req.sessionID);
// res.send(req.body);
// next();
// res.redirect("/auth");
// if (req.body) {
//   res.send(req.body);
//   // next();
// } else {
//   // next();
//   res.send(requestAnimationFrame);
// }
// res.send(req.body.user);
// });

// router.get("/auth", (req, res, next) => {
//   console.log("you're in auth", req, res);
//   res.send(req.body);
//   // next();
// });

router.get("/auth", isAuth, (req, res, next) => {
  console.log("inside auth route", req.user, req.isAuthenticated);
  if (req.user) {
    res.status(200).send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  } else {
    res.status(403).send("access forbidden");
  }
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
  console.log("isAuth is called!");
  if (req.isAuthenticated()) {
    console.log("yes, authenticated");
    return next();
  } else {
    console.log("not authenticated");
  }

  // if (req.username) {
  //   return next();
  // }
  // console.log("called in isAuth");
  // if (req.isAuthenticated()) {
  //   console.log("get in");
  //   return next();
  // }
  // console.log("get out");
  // res.json({ redirectUrl: "/login" });
  // redirect happens on front end
  // return res.redirect("/");
}

function notAuth(req, res, next) {
  console.log("called in notAuth");
  if (req.isAuthenticated()) {
    return res.redirect("/auth");
  }
  next();
}

module.exports = router;
