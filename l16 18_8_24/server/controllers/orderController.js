const OrderModel = require("../models/order");


const orderCtrl = {
    async addOrder(req, res) {
        try {
            const resp = await OrderModel.create({ ...req.body, userId: req.id })
            res.status(200).json(resp)
        } catch (error) {
            res.status(500).send("internal error: " + error)
        }
    },
    async removeOrder(req, res) {
        try {
            await OrderModel.deleteOne({ _id: req.query.id, userId: req.id })
            res.status(201).send("order deleted")
        } catch (error) {
            res.status(500).send("internal error: " + error)
        }
    },
    async updateOrder(req, res) {
        try {
            await OrderModel.updateOne({ _id: req.query.id, userId: req.id }, req.body)
            res.status(201).send("order updatet")
        } catch (error) {
            res.status(500).send("internal error: " + error)
        }
    },
    async updateOrder(req, res) {
        try {
            await OrderModel.updateOne({ _id: req.query.id, userId: req.id }, req.body)
            res.status(201).send("order updatet")
        } catch (error) {
            res.status(500).send("internal error: " + error)
        }
    },
    async getAllOrders(req, res) {
        const limit = +req.query.limit || 5
        const skip = +req.query.skip || 0
        try {
            const orders = await OrderModel.find().limit(limit).skip(skip*limit);
            res.status(201).json(orders)
        } catch (error) {
            res.status(500).send("internal error: " + error)
        }
    },
}

module.exports = orderCtrl;