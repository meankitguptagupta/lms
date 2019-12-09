module.exports = (roles) => {
    return function(req, res, next) {
        if (roles.includes (req.user.role)) {
          return next();
        } 
        return res.send(403, {status: false, message: 'Invalid access', error: {role: 'You are not authorize to access this service'}});
    }
}