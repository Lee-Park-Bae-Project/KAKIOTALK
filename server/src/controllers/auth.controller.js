const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user.model");
const googleClient = require("../configs/google.json");
const session = require("express-session");

app.use(
  session({ secret: "SECRET_CODE", resave: true, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClient.web.clientID,
      clientSecret: googleClient.web.client_secret,
      redirect: googleClient.web.redirect
    },
    (accessToken, refreshToken, profile, cb) => {
      /* user checked*/

      User.findOrCreate(
        { userid: profile.id },
        { name: profile.displayName, userid: profile.userid },

        (err, user) => {
          return cb(null, profile);
        }
      );
    }
  )
);

const authenticateUSer = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(301).redirect("/login");
  }
};

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

/*when login success*/

app.get("/", authenticateUSer, (req, res, next) => {
  res.json("welcome", { title: "welcome" });
});

/*go to login page*/
app.get("/login", (req, res, next) => {
  res.json("login", { title: "Login" });
});

/*login with google*/

app.get(
  "login/google",
  passport.authenticate("google", { scope: [googleClient.profile] })
);

/*if login success, then comeback*/
app.get(
  "/login/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/"
  })
);
