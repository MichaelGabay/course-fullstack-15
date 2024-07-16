const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

module.exports = mongoose.model("users", userSchema);