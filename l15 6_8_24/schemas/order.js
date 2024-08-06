const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    // totalPrice
    // numberOfItems
    // cashierName  //שם הקופאי
    // shippingAddress
    // userId // מי ביצע את ההזמנה
}, { timestamps: true })

const OrderModel = mongoose.model("orders", orderSchema);
module.exports = OrderModel;

