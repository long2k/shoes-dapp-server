const Product = require("../../models/product.model");
const { removeProduct } = require("../../near/interface");
module.exports = async (req, res) => {
    try {
        let { id } = req.body;
        if (!id) {
            return res.error("InValid Id Field.");
        }
        const outcome = await removeProduct(id);
        if (outcome.status.Failure) {
            return res.error(outcome);
        }
        const product = await Product.deleteOne({ id });
        if (product) {
            return res.ok(product);
        }
    } catch (error) {
        return res.serverError("error:" + error);
    }
};
