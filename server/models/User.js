const mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    validator = require('validator'),
    bcrypt = require('bcrypt');

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is missing"]
    },
    password: {
        select: false,
        type: String,
        required: [true, "Password is missing"]
    },
    tokens: {
        type: [{
            type: String,
        }],
        select: false,
    },
},
    {
        timestamps: true
    })
// Validate if username is unique - unique option only creates an index
userSchema.path('username').validate(async function (value) {
    const usernameCount = await mongoose.models.User.countDocuments({ username: value, _id: { $ne: this._id } });
    return !usernameCount;
}, 'There already is an account with this username!');

userSchema.pre('save', function (next) {
    const user = this
    if (user.isModified('password')) {
        bcrypt.hash(user.password, 10).then(function (hash) {
            user.password = hash
            next()
        }).catch(function (error) {
            return next(error)
        })
    } else {
        next()
    }

})

userSchema.methods.comparePassword = async function (password) {
    const matches = await bcrypt.compare(password, this.password);
    console.log(matches ? "Pasword matched" : "Password did not match")
    return matches;
}

userSchema.methods.generateToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '2 days' });
    user.tokens.push(token);
    await user.save();
    return token;
}


module.exports = mongoose.model('User', userSchema);