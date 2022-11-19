const Product = require('../../models/product.model')
module.exports = async (req, res) => {
    try {
        let { id,  name, price, discount, count, discription } = req.body
        if (!name || !price) {
            return res.error("InValid Field.")
        }
        const product = await Product.findOne({id});
        product.name = name ?? product.name
        product.price = price ?? product.price
        product.discount = discount ?? product.discount
        product.count = count ?? product.discount
        product.discription = discriotion ?? product.discription
        
        await product.save()

        if (product) {
            return res.ok(product)
        }
    } catch (error) {
        return res.serverError("error:", error)
    }
}