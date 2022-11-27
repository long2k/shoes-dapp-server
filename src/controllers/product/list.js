const Product = require('../../models/product.model')
module.exports = async (req, res) => {
    try {
        const product = await Product.find()
        if (product) {
            return res.ok(product)
        }
    } catch (error) {
        return res.serverError("error:", error)
    }
}