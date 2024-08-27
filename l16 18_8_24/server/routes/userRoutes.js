const router = require("express").Router()
const {auth,authAdmin} = require("../middlewares/auth");
const {register, login} =require("../controllers/userController")

// register route
router.post("/register",register)

router.post("/login", login)


module.exports = router;


