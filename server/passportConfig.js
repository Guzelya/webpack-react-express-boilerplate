const { User } = require("./db/models");
const bcrypt = require("bcryptjs");
const validPassword = require("../config/passwordUtils").validPassword;
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;
require("dotenv").config();

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
      if (User1) {
        console.log("user exists from passport config");
        const isValid = validPassword(password, User1.hash, User1.salt);
        if (isValid) {
          return done(null, User1);
        }
        return done(null, false);
      } else {
        console.log("user does not exist from passportConfig");
        return done(null, false);
      }
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
      // if (password === null) {
      //   ("we should be here");
      //   return done(null, false);
      // } else {
      //   // const isValid = validPassword(password, User1.hash, User1.salt);
      //   // if (isValid) {
      //   //   return done(null, User1);
      //   // } else {
      //   //   return done(null, false);
      //   return done(null, User1);
      //   // }
      // }
      //   });
    })
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3002/api/auth/google/callback",
        passReqToCallback: true,
      },
      // callback function ==> gets triggered when after google login app goes back to one of its pages
      async (request, accessToken, refreshToken, profile, done) => {
        console.log(
          "inside google middleware",
          profile,
          "accesstoken",
          accessToken
        );
        try {
          // should create new entry googleId for all users: googleId: profile.id
          const User1 = await User.findOne({
            where: {
              username: profile.email,
            },
          });
          // if user did not register with the app
          if (!User1) {
            console.log("user does not exist!");
            const newUser = await User.create({
              username: profile.email,
              googleId: profile.id,
            });
            return done(null, newUser);
          }
          return done(null, User1);
        } catch (err) {
          console.log("error from the callback", err);
          return err;
        }
      }
    )
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
