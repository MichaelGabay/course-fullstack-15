const UserModel = require("../models/user");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const userCtrl = {
    async register(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const newUser = await UserModel.create(req.body)
            res.status(201).json(newUser)
        } catch (error) {
            if (error.code == 11000) {
                return res.status(409).send("user already registered")
            }
            res.status(500).send("internal error")
        }
    },
    async login(req, res) {
        try {
            const user = await UserModel.findOne({ email: req.body.email })
            if (!user) return res.status(404).send("user not found");

            if (!await bcrypt.compare(req.body.password, user.password)) {
                return res.status(401).send("password mismatch")
            }

            const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: "30d" })
            res.cookie("access_token", token, { httpOnly: true, sameSite: "none", secure: true })
            res.status(200).send("user logged in")
        } catch (error) {
            return res.status(500).send("internal error")
        }
    }
}


module.exports = userCtrl;