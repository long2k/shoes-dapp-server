const Product = require("../../models/product.model");
const { getProduct } = require("../../near/interface");
module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return req.error();
        }
        const response = await getProduct(id);
        const productData = JSON.parse(JSON.parse(response));
        const product = await Product.findById(id);

        if (product && productData) {
            return res.ok({
                id,
                name: product.name,
                price: productData.data.unitPrice,
                count: Number(productData.data.quantity),
                discount: product.discount,
                description: product.description,
                img: product.img,
            });
        }
        return res.notFound();
    } catch (error) {
        return res.serverError("error:" + error);
    }
};
