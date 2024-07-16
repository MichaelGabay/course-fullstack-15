const UserModel = require("../schemas/user");
const router = require("express").Router()
const bcrypt = require("bcrypt")
router.post("/register", async (req, res) => {
    try {
        req.body.password =await bcrypt.hash(req.body.password, 10)
        const newUser = await UserModel.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        if (error.code == 11000){
            return res.status(400).send("user already registered")
        }
        res.status(500).send("internal error")
    }
})


module.exports = router;