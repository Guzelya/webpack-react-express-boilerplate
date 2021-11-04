const { User } = require("./db/models");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  //   const customFields = {
  //     usernameField: "email",
  //     passwordField: "password",
  //   };
  console.log("step 1");
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      //   console.log("username, password", customFields);
      const User1 = await User.findOne({
        where: {
          username,
        },
      });
      //   User.findOne({ username: username }, (err, user) => {
      //     if (err) throw err;
      //     if (!user) return done(null, false);
      // bcrypt.compare(password, user.password, (err, result) => {
      //   if (err) throw err;
      //   if (result === true) {
      //     return done(null, user);
      //   } else {
      //     return done(null, false);
      //   }
      // });
      if (password === null) {
        return done(null, false);
      } else {
        return done(null, User1);
      }
      //   });
    })
  );
  // new localStrategy(customFields, passportCheckFunction)

  //   const passportCheckFunction = async (username, password, done) => {
  //     console.log("values in passportCheckFunction", username, password, done);
  //     return true;
  //   };

  passport.serializeUser((user, cb) => {
    console.log("step 2 serialized");
    cb(null, user.id);
  });
  //   passport.deserializeUser((id, cb) => {
  //     console.log("step 3");
  //     User.findOne({ _id: id }, (err, user) => {
  //       const userInformation = {
  //         username: user.username,
  //       };
  //       cb(err, userInformation);
  //     });
  //   });
  passport.deserializeUser(async (id, done) => {
    // console.log("user in deserialized", user);
    try {
      const user = await User.findOne({
        where: {
          id,
        },
      });
      console.log("step 3 in deserialized", user.id);
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  });
};
