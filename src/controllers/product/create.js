const Product = require("../../models/product.model");
const { addProduct } = require("../../near/interface");
module.exports = async (req, res) => {
    try {
        let { name, price, discount, count, description, img } = req.body;
        if (!name || !price) {
            return res.error("InValid Field.");
        }
        const product = new Product({
            name,
            price,
            discount,
            count,
            description,
            img,
        });
        const newProduct = await product.save();
        const outcome = await addProduct(newProduct.id, Number(count), price);
        //Error
        if (outcome.status.Failure) {
            Product.findByIdAndRemove(newProduct.id);
            res.error(outcome);
        }
        //Success
        if (newProduct) {
            return res.ok(newProduct);
        }
    } catch (error) {
        return res.serverError("error:" + error);
    }
};
