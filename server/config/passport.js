var LocalStrategy   = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var User = require('../fakeDB.js');
var Google = require('./auth.js');

module.exports = function(passport) {
  
    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(user, done) {
      done(null, user);
    });
 
    passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true, 
        session: false
        },

        function(req, username, password, done) { 
            var i;    
            console.log('LOCAL-LOGIN PASSPORT ENTERED', username, ":", password);
          
            for(i = 0; i < User.length; i++) {
                if(User[i].displayName === username && User[i].password === password) {
                    console.log('permission granted');
                return done(null, User[i]);
                } 
            }
            return done(null, false, { message: req.flash('Invalid credentials.') });

        }));

    passport.use('google', new GoogleStrategy({
        clientID: Google.googleAuth.clientID,
        clientSecret: Google.googleAuth.clientSecret,
        callbackURL: Google.googleAuth.callbackURL
    },
    function(token, tokenSecret, profile, done) {
        process.nextTick(function(){
                  return done(null, profile);
        })
  
    }));

};