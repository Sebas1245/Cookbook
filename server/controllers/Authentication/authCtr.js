const   User = require('../../models/User'),
        CustomError = require('../../middleware/customError'),
        bcrypt = require('bcrypt'),
        ctr = {};

ctr.register = () => async (req,res,next) => {
    const { username, password, confirmPassword } = req.body;
    if (!username) return Promise.reject( new CustomError(400, "You need a username to sign up!"));
    if (password != confirmPassword) return Promise.reject(new CustomError(400, "Passwords do not match"));
    console.log(username, password, confirmPassword)
    let user = new User({username, password});
    await user.save();
    const token = await createToken(user);
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        user,
        token
    });
}

ctr.login = () => async (req, res, next) => {
    const { username, password } = req.body;
    let user = await User.findOne({username}).select('+password +tokens').exec();
    if (!user) return Promise.reject( new CustomError(401, "Username or passwoord incorrect, please try again."));
    const matches = await user.comparePassword(password);
    if (!matches) return Promise.reject( new CustomError(401, "Username or passwoord incorrect, please try again."));
    const token = await createToken(user);
    res.status(201).json({
        success: true,
        message: "Login successful",
        user,
        token
    })
}

const createToken = async (user) => {
    let token = await user.generateToken();
    user = user.toJSON();
    delete user.password;
    delete user.tokens;
    return token;
}

module.exports = ctr;