const passport = require("passport");
const { User } = require("../server/db/models");
const strategy = require("./strategy");

// serialize decides what to store in the session. In this case user is stored
// user will be attached as req.session.passport.user
passport.serializeUser((user, done) => {
  // save user id , by the help of done function
  console.log("serialized", user.id);
  done(null, user.id);
});
// deserialize is used to retrieve data from session
passport.deserializeUser(async (id, done) => {
  // console.log("user in deserialized", user);
  try {
    const user = await User.findByPk(id);
    console.log("in deserialized", id);
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

passport.use("local", strategy);
