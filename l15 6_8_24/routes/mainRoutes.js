const router = require("express").Router()
const userRouter = require("./userRoutes")
const orderRouter=require("./orderRoutes")



router.use("/user", userRouter)
router.use("/order", orderRouter)


module.exports = router;