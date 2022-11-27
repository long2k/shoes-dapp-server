const Product = require("../../models/product.model");
const { updateProduct } = require("../../near/interface");
module.exports = async (req, res) => {
    try {
        let { id, name, price, discount, count, description } = req.body;
        if (!name || !price) {
            return res.error("InValid Field.");
        }
        const product = await Product.findOne({ id });
        const isCallingContract =
            price !== product.price || count !== product.count;
        product.name = name ?? product.name;
        product.price = price ?? product.price;
        product.discount = discount ?? product.discount;
        product.count = count ?? product.discount;
        product.description = description ?? product.description;
        await product.save();
        //Call contract only when quantity or price is changed
        if(isCallingContract) {
            const outcome = await updateProduct(id, Number(count), price);
            console.log(outcome)
            if(outcome.status.Failure) {
                res.error(outcome)
            }
        }
        if (product) {
            return res.ok(product);
        }
    } catch (error) {
        return res.serverError("error:" + error);
    }
};
