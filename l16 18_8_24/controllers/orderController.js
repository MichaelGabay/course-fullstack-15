const OrderModel = require("../models/order");


const orderCtrl = {
    async addOrder(req, res) {
        try {
            const resp = await OrderModel.create({ ...req.body, userId: req.id })
            res.status(200).json(resp)
        } catch (error) {
            res.status(500).send("internal error: " + error)
        }
    }
}

module.exports = orderCtrl;