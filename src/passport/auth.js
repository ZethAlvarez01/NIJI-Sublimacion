const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/admin');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use('local-registro', new LocalStrategy({
  usernameField: 'admin',
  passwordField: 'pass',
  passReqToCallback: true
}, async (req, admin, password, done) => {
  const user = await User.findOne({'user': admin})
  console.log(user)
  if(user) {
    return done(null, false, req.flash('registroMensaje', 'Ese usuario ya existe'));
  } else {
    const newUser = new User();
    newUser.user = admin;
    newUser.password = newUser.encryptPassword(password);
    console.log(newUser)
    await newUser.save();
    done(null, newUser);
  }
}));


passport.use('local-login', new LocalStrategy({
    usernameField: 'admin',
    passwordField: 'pass',
    passReqToCallback: true
  }, async (req, admin, password, done) => {
    const user = await User.findOne({'user': admin});
    if(!user) {
      return done(null, false, req.flash('loginMensaje', 'Usuario no encontrado'));
    }
    if(!user.comparePassword(password)) {
      return done(null, false, req.flash('loginMensaje', 'Contraseña incorrecta'));
    }
    return done(null, user);
  }));
