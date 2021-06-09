const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const validPassword = require("./passwordUtils").validPassword;
const User = require("../server/db/models");

const customFields = {
  usernameField: "email",
  passwordField: "pw",
};

const passportCheck = (username, password, done) => {
  console.log("username in passport", username, password, done);
  User.findOne({ username: username })
    .then((user) => {
      console.log("user in passport", user);
      if (!user) {
        return done(null, false);
      }

      const isValid = validPassword(password, user.hash, user.salt);

      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      done(err);
    });
};

const strategy = new LocalStrategy(customFields, passportCheck);

passport.use(strategy);

passport.serializeUser((user, done) => {
  console.log("serialized", user);
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  console.log("deserialized", userId);
  User.findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
