import LocalStrategy from "passport-local";
import User from "../models/userModel.js";
import passport from "passport";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    User.authenticate()
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
