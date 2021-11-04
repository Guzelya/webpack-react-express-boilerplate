const LocalStrategy = require("passport-local").Strategy;
const validPassword = require("./passwordUtils").validPassword;
const { User } = require("../server/db/models");

const customFields = {
  usernameField: "email",
  passwordField: "password",
};
console.log("customfields", customFields);
// done is internal passport function that takes care of supplying user's
// credentials after user is authenticated successfully
const passportCheck = async (username, password, done) => {
  console.log("step 0");
  console.log("username in passport", username, password);
  try {
    const user = await User.findOne({
      where: {
        username,
      },
    });
    if (!user) {
      console.log("user does not exist");
      return done(null, false, { message: "user does not exist" });
    }

    const isValid = validPassword(password, user.hash, user.salt);

    if (isValid) {
      console.log("userrrrrr", user.id);
      console.log("user exists!");

      return done(null, user);
    } else {
      console.log("invalid password");
      return done(null, false);
    }
  } catch (err) {
    done(err);
  }
};

const strategy = new LocalStrategy(customFields, passportCheck);

module.exports = strategy;
