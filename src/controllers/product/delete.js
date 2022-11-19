const Product = require('../../models/product.model')
module.exports = async (req, res) => {
    try {
        let { id } = req.body
        if (!id) {
            return res.error("InValid Id Field.")
        }
        
        await Product.deleteOne({id})

        if (product) {
            return res.ok(product)
        }
    } catch (error) {
        return res.serverError("error:", error)
    }
}