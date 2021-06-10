const app = require("../server");
const router = require("express").Router();
const passport = require("passport");

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
  (req, res, next) => {
    console.log("it is a new user", req.body);
    //   const newUser =
  }
);
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
