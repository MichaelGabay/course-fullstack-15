const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "user" }
}, { timestamps: true })

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;