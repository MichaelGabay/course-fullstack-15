const router = require("express").Router()
const userRouter = require("./userRoutes")
const productRouter = require("./productRoutes")


// router.use("/user", userRouter)
// router.use("/product",productRouter)


router.get("/test", (req, res) => {
        
    return res.send(req.query.x+req.query.y)

    // req -> info anout this request
    // res -> use this object for response to request

    // תגובה של טקסט פשוט
    // res.send() 

    // תגובה של גייסון
    // res.json()

    // שליחת קובץ
    // res.sendFile()
    // על מנת לשלוח קובץ ניצטרך לספק בתוך הסוגריים העגולים את הנתיב האבסולטי לקובץ 
    // נעזר בספריה ובמשתנה
    // path and __dirnam

    // ניתן לענות לבקשה רק פעם אחת 
    // ברגע שאתם מגיבים הבקשה הסתיימה
})

module.exports = router;