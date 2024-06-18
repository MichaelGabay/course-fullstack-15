// יבוא ספריית אקספרס
const express = require("express")

// לאפשר גישה למשתני אי אנ וי מהקובץ .env
require("dotenv").config()

// יצירת אינסטנס חדש לסרבר שירוץ על המחשב שלי
const app = express();




const port = process.env.PORT || 3000

app.listen(port, () => console.log("server is running on port " + port))

