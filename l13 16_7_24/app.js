// יבוא ספריית אקספרס
const express = require("express")

// לאפשר גישה למשתני אי אנ וי מהקובץ .env
require("dotenv").config()
// יבוא של הראוטר הראשי
const mainRouter=require("./routes/mainRoutes")
// יצירת אינסטנס חדש לסרבר שירוץ על המחשב שלי
const app = express();
// התחברות למסד נתונים
require("./db/connnect")

// איפשור גישה לגוף הבקשה - למידע שנשלח כבאדי
app.use(express.json())

// קישור הסרבר למסלולים שנכתבו בקובץ main routes
app.use(mainRouter)



const port = process.env.PORT || 3000

app.listen(port, () => console.log("server is running on port " +"http://localhost:"+ port))
