const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an email address"],
        unique: true
    },
    userName: {
        type: String,
        required: [true, "What should we call you?"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Create a password to protect your journey!"],
        minLength: [4, "It should be atleast of length 4"]
    }
})

module.exports = mongoose.model('User', userSchema);