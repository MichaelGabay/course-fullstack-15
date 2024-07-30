// יבוא ספריית אקספרס
const express = require("express")
// יבוא ספריית קורס
const cors = require("cors")
// יבוא ספרית קוקי פרסר
const cookieParser = require('cookie-parser');
// לאפשר גישה למשתני אי אנ וי מהקובץ .env
require("dotenv").config()
// יבוא של הראוטר הראשי
const mainRouter = require("./routes/mainRoutes")
// יצירת אינסטנס חדש לסרבר שירוץ על המחשב שלי
const app = express();
// התחברות למסד נתונים
require("./db/connnect")

app.use(cors({
    // איזה דומיינים יוכלו לגשת
    origin: ["http://localhost:5173"],
    // אילו סוגי בקשות
    methods: ["GET", "POST", "PUT", "DELETE"],
    // מאפשר שליחת עוגיות
    credentials: true
}))

// איפשור גישה לגוף הבקשה - למידע שנשלח כבאדי
app.use(express.json())
// מאפשר גישה לעוגיות בתוך הראוטים
app.use(cookieParser())






// קישור הסרבר למסלולים שנכתבו בקובץ main routes
app.use(mainRouter)



const port = process.env.PORT || 3000

app.listen(port, () => console.log("server is running on port " + "http://localhost:" + port))
