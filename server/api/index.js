const app = require("../server");
const router = require("express").Router();

// app.get("/v1", (req, res) => {
//   console.log("connected!");
// });

// apiRouter.get("/hello", (req, res) => res.send({ hello: "world" }));

// app.use("/v1", function (req, res, next) {
//   console.log('"time');
//   next();
// });
// router.use("/v1");

// app.use("/v1", router);
router.use("/", require("./login"));

// router.get("/v1", (req, res, next) => {
//   try {
//     console.log("inside the router");
//     res.send("is it in router?");
//   } catch {
//     console.log("it's an error", error);
//     next(error);
//   }
// });
// app.use("/v1", router);

module.exports = router;
