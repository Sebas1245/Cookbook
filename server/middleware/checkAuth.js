const jwt = require('jsonwebtoken'),
    CustomError = require('./customError'),
    User = require('../models/User'),
    mw = {};
    
mw.isLoggedIn = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return Promise.reject(new CustomError(401, 'Log in required.'));
    }
    const data = await jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    const user = await User.findById(data._id).select('+username +tokens +bActive').exec();
    if (user && !user.tokens.includes(token.split(' ')[1])) {
        return Promise.reject(new CustomError(405, 'Session has expired, login again.'));
    }

    if (user) {
        req.user = user;
        delete user.tokens;
        delete user.bActive;
        next();
    } else {
        return Promise.reject(new CustomError(401, 'Log in required.'));
    }
}

module.exports = mw;