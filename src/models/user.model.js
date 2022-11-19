const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    avt: {
        type: String,
        default: ''
    },
    wallet: {
        type: String, 
        default: ''
    },
    address: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true,
    }
}, { timestamps: true })

module.exports = mongoose.model("user", UserSchema, "user");