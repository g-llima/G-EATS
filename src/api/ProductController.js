const { v4: uuid } = require("uuid");
const productM = require ("../app/components/products/product/productM")

module.exports = {
    async index(req, res) {
        try {
            const products = await productM.find();
            return res.status(200).json({products})
        } catch (err) {
            res.status(500).json({error: err.message})
        }
    },
}