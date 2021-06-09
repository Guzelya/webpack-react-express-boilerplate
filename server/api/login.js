const app = require("../server");
const router = require("express").Router();

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

module.exports = router;
