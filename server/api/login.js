const app = require("../server");
const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const crypto = require("crypto");
// const flash = require("express-flash");
const { genPassword } = require("../../config/passwordUtils");
const { validPassword } = require("../../config/passwordUtils");
// const validPassword = require("../config/passwordUtils").validPassword;
const { User } = require("../db/models");
// require("dotenv").config();

// router.use(flash());
// const key = process.env.SEND_EMAIL_KEY;
// console.log("we're in login", typeof key, key);
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: { api_key: process.env.SEND_EMAIL_KEY },
  })
);
// console.log("transporter", transporter);
// console.log("dotenv", process.env.GOOGLE_CLIENT_ID);

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
  // console.log("user in login after redirect", req.body);
  passport.authenticate("local", async (err, user, info) => {
    // console.log("user in register", user);
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
          // password: req.body.password,
          salt,
          hash,
          admin: true,
        });
        console.log("newUser", newUser);
        const result = await transporter.sendMail({
          to: newUser.username,
          from: "guzelkisselev@protonmail.com",
          subject: "you have been successfully signed up",
          html: "<h1>welcome to blood donor donation group</h1>",
          // text: "Hello Team! are we in spam folder again?",
        });
        console.log("result from sendMail", result);
        req.logIn(newUser, (err) => {
          if (err) throw err;
          // res.send("Successfully Authenticated");
          console.log("req.logIn", req.user);
          res.status(200).send("you're logged in");
        });
        // const result = await transporter.sendMail({
        //   to: newUser.username,
        //   from: "no-reply@gmail.com",
        //   subject: "you have been successfully signed up",
        //   html: "<h1>welcome to blood donor donation group</h1>",
        // });
        // console.log("result from sendMail", result);
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

router.post("/login", async (req, res, next) => {
  // console.log("user in login after redirect", req.body);
  let User2;
  if (req.body.password_token) {
    const User1 = await User.findOne({
      where: {
        resetToken: req.body.password_token,
        // expireToken: { $gt: Date.now() },
      },
    });
    User2 = User1;
  }
  passport.authenticate("local", (err, user, info) => {
    if (User2) {
      user = User2;
    }
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

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
  // (req, res, next) => {
  //   console.log("inside auth/google route", req.body);
  //   res.status(200).send("authentication is successful");
  // }
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log("redirect callback", req.body);
    res.redirect("/auth");
  }
);
router.get("/auth/facebook", passport.authenticate("facebook"));
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log("redirect callback", req.body);
    res.redirect("/auth");
  }
);

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "/protected",
//     failureRedirect: "/auth/google/failure",
//   })
// );

router.get("/protected", (req, res) => {
  res.send(`Hello new user!`);
});

router.get("/login", isAuth, (req, res, next) => {
  if (req.user) {
    console.log("req.user", req.user);
    res.status(200).send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  } else {
    res.status(403).send("access forbidden");
  }
});

router.post("/reset-password", async (req, res, next) => {
  console.log("inside reset password");
  const password_token = crypto.randomBytes(32).toString("hex");
  const User1 = await User.findOne({
    where: {
      username: req.body.email,
    },
  });
  console.log("user1", User1);
  if (User1) {
    User1.resetToken = password_token;
    User1.expireToken = Date.now() + 3600000;
    resetURL = `http://localhost:3002/reset/${password_token}`;
    justURL = "https://community.nodemailer.com";
    await User1.save();
    transporter.sendMail({
      to: User1.username,
      from: "guzelkisselev@protonmail.com",
      subject: "reset your password",
      html: `<p>To reset your password please follow this link</p> <a href=${resetURL}>hello there</a>
      <h2> anything?</h2>`,
    });
    return res.status(200).json("check your email");
    // res.redirect("/login");
  }
  return res.status(422).json({ error: "User dont exists with that email" });
});

router.post("/new-password", async (req, res, next) => {
  console.log("inside the new-password router");
  const User1 = await User.findOne({
    where: {
      resetToken: req.body.password_token,
      // expireToken: { $gt: Date.now() },
    },
  });
  if (User1) {
    if (User1.expireToken - Date.now() > 0) {
      console.log("user1 time left", User1.expireToken - Date.now());
      const saltHash = genPassword(req.body.password);
      const salt = saltHash.salt;
      const hash = saltHash.hash;
      User1.salt = salt;
      User1.hash = hash;
      await User1.save();
      // console.log("req.body.user", req.body);
      return res.redirect(307, "/api/login");
      // return res.status(200).json("your password is reset!!!!");
    }
  }
  // return res.status(422).json("your link expired, please try again");
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
  console.log("inside auth route", req, req.isAuthenticated);
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
  console.log("isAuth is called!", req.isAuthenticated, req.user);
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
