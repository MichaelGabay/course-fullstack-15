const router = require("express").Router()
const userRouter=require("./userRoutes")
const productRouter=require("./productRoutes")


router.use("/user", userRouter)
router.use("/product",productRouter)


module.exports=router;