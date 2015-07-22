var LocalStrategy   = require('passport-local').Strategy;

var User = require('../fakeDB.js');

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
        console.log('LOCAL-LOGIN PASSPORT ENTERED', username, ":", password);
      
        for(var i = 0; i < User.length; i++) {
            if(User[i].username === username && User[i].password === password) {
                console.log('permission granted');
            return done(null, User);
            } 
        }
        return done(null, false, { message: 'Incorrect password.' });

    }));

};