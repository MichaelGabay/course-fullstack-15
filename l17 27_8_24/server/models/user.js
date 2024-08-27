const mongoose = require("mongoose")

const userSchema =new mongoose.Schema({
    name: String,
    age: Number,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "user" }
})

module.exports= mongoose.model("users", userSchema);
