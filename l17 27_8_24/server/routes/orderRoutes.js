const { addOrder, removeOrder, updateOrder, getAllOrders } = require("../controllers/orderController");
const { auth, authAdmin } = require("../middlewares/auth");

const router = require("express").Router();

// הוספת הזמנה
// מחיקת הזמנה
// עריכת הזמנה
// קבלת כל ההזמנוץ של היוזר שמבקש

router.post("/add", auth, addOrder)

router.delete("/remove", auth, removeOrder)
router.put("/update", auth, updateOrder)
router.get("/getAll", auth, authAdmin, getAllOrders)

// כל אלה שלמעלה חייבים בדיקה שהמשתמש מחובר👆


// קבלת כל ההזמנות
// קבלת כל המשתמשים
// כל אלה שלמעלה חייבים בדיקה שהמשתמש שמחובר הוא אדמין👆
module.exports = router