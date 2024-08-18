const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    totalPrice: Number,
    numberOfItems: Number,
    cashierName: String,
    shippingAddress: String,
    userId: mongoose.Schema.Types.ObjectId
}, { timestamps: true })

const OrderModel = mongoose.model("orders", orderSchema);
module.exports = OrderModel;

