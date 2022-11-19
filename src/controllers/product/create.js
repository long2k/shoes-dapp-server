const Product = require('../../models/product.model')
module.exports = async (req, res) => {
    try {
        let { name, price, discount, count, description, img } = req.body
        if (!name || !price) {
            return res.error("InValid Field.")
        }
        const product = new Product({
            name, price, discount, count, description, img
        })
        const newProduct = await product.save()
        if (product) {
            return res.ok(newProduct)
        }
    } catch (error) {
        return res.serverError("error:", error)
    }
}