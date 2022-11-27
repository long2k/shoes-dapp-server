const Product = require("../../models/product.model");
const { getAllProducts } = require("../../near/interface");
module.exports = async (req, res) => {
    try {
        const products = await Product.find();
        const productsData = JSON.parse(JSON.parse(await getAllProducts()));
        const productsList = productsData.map((data) => {
            const product = products.find((p) => data.id === p.id);
            if (product) {
                return {
                    id: product.id,
                    count: Number(data.data.quantity),
                    price: data.data.unitPrice,
                    discount: product.discount,
                    description: product.description,
                    image: product.img,
                };
            }
            return {
                id: "NOT_FOUND",
            };
        });
        if (productsList) {
            return res.ok(productsList);
        }
        return res.error();
    } catch (error) {
        return res.serverError("error:" + error);
    }
};
