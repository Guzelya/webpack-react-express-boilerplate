const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const validPassword = require("./passwordUtils").validPassword;
const { User } = require("../server/db/models");

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const passportCheck = async (username, password, done) => {
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

passport.use(strategy);

passport.serializeUser((user, done) => {
  console.log("serialized", user.id);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  // console.log("user in deserialized", user);
  try {
    const user = await User.findByPk(id);
    console.log("in deserialized");
    return done(null, user);
  } catch (err) {
    return done(err);
  }
  // console.log("deserialized", user.id);
  // User.findById(user.id)
  //   .then((user) => {
  //     done(null, user);
  //   })
  //   .catch((err) => done(err));
});
