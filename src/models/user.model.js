const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
}, {timestamps: true})

module.exports = mongoose.model("user", UserSchema, "user");