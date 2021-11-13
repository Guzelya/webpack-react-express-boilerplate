const passport = require("passport");
const { User } = require("./db/models");
require("dotenv").config();

const GoogleStrategy = require("passport-google-oauth2").Strategy;

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
console.log(
  "google client id",
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);
module.exports = function (passport) {
  console.log("inside passport middleware");
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3002/api/auth",
        passReqToCallback: true,
      },
      async function (request, accessToken, refreshToken, profile, done) {
        const User1 = await User.findOne({
          where: {
            profile,
          },
        });
        console.log(
          "passport google-oauth --profile",
          profile,
          "accessToken",
          accessToken
        );
        if (User1) {
          console.log("exists!");
          return done(null, profile);
        }
        return done(null, false);
      }
    )
  );

  passport.serializeUser(function (user, done) {
    console.log("passport google serialize");
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    console.log("passport google deserialize");
    done(null, user);
  });
};
