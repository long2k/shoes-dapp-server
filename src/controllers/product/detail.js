const Product = require('../../models/product.model')
module.exports = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        if (product) {
            return res.ok(product)
        }
    } catch (error) {
        return res.serverError("error:", error)
    }
}