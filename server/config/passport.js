/*******************************
  Dependencies
********************************/

var LocalStrategy   = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy

var User = require('../helpFiles/fakeDB.js');
var ThirdPartyAuth = require('./auth.js');


/*******************************
  Export function
  ********************************/
module.exports = function (passport) {
  
/*******************************
  Serialize/Deserialize user
********************************/

    //determines what data from the user object should be stored in the session.
    //the result is attached to the session as a key
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    //by using the same key it retrieves the whole object
    //which is getting attached to request object as req.user
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

 /*******************************
  Middleware for Local Auth. tries to match a user and 
  returns him to the post route which redirects
********************************/
    passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true, 
        session: false
        },

        function (req, username, password, done) { 
            var i;    
            console.log('LOCAL-LOGIN PASSPORT ENTERED', username, ":", password);
          
            for (i = 0; i < User.length; i++) {
                if (User[i].displayName === username && User[i].password === password) {
                    console.log('permission granted');
                return done(null, User[i]);
                } 
            }
            return done(null, false, { message: req.flash('Invalid credentials.') });

        }));

/*******************************
  Middleware for Google Auth
********************************/
    passport.use('google', new GoogleStrategy({
        clientID: ThirdPartyAuth.googleAuth.clientID,
        clientSecret: ThirdPartyAuth.googleAuth.clientSecret,
        callbackURL: ThirdPartyAuth.googleAuth.callbackURL
    },
    function (token, tokenSecret, profile, done) {
        process.nextTick( function () {
                  return done(null, profile);
        })
  
    }));

/*******************************
  Middleware for Facebook Auth
********************************/
    passport.use('facebook', new FacebookStrategy({
    clientID: ThirdPartyAuth.facebookAuth.clientID,
    clientSecret: ThirdPartyAuth.facebookAuth.clientSecret,
    callbackURL: ThirdPartyAuth.facebookAuth.callbackURL
    },
    function (accessToken, refreshToken, profile, done) {
        process.nextTick( function () {
            return done(null, profile);
        });
    }));

};