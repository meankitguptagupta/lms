var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    findUserById = require ('./app/repositories/user/findUserById');;

module.exports = (passport) => {
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: 'library-management-system'
    };
    
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

        findUserById (jwt_payload.user_id, (err, user)=> {
            if (err) return done(err, false);

            if (user[0]) done(null, user[0]);
            
            else done(null, false);
        });
    }));
};