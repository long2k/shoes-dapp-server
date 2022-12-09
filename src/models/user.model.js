const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
    {
        accountId: String,
        lastSpin: Date,
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema, "user");
