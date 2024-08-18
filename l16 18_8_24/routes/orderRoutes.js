const { addOrder } = require("../controllers/orderController");
const { auth, authAdmin } = require("../middlewares/auth");

const router=require("express").Router();

// ליצור
// הוספת הזמנה
// מחיקת הזמנה
// עריכת הזמנה
// קבלת כל ההזמנוץ של היוזר שמבקש

router.post("/add", auth, addOrder)

// כל אלה שלמעלה חייבים בדיקה שהמשתמש מחובר👆


// קבלת כל ההזמנות
// קבלת כל המשתמשים
// כל אלה שלמעלה חייבים בדיקה שהמשתמש שמחובר הוא אדמין👆
module.exports=router