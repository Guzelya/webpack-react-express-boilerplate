const app = require("../server");
const router = require("express").Router();
router.use("/", require("./login"));

module.exports = router;
