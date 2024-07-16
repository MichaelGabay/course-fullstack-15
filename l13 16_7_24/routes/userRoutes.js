const UserModel = require("../schemas/user");
const router = require("express").Router()

router.post("/register", async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        if(error.code==11000)
        res.status(400).send("user already registered")
    }
})


module.exports = router;