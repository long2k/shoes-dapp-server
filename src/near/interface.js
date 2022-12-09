const shopCore = require("./shop/shop.core");
const tokenCore = require("./token/token.core");

module.exports = {
    addProduct: (id, count, price) =>
        shopCore.callMethod({
            method: "add_product",
            args: {
                product_id: id, //string
                quantity: count, //number
                unit_price: price, //string
            },
        }),
    updateProduct: (id, count, price) =>
        shopCore.callMethod({
            method: "update_product",
            args: {
                product_id: id, //string
                quantity: count, //number
                unit_price: price, //string
            },
        }),
    removeProduct: (id) =>
        shopCore.callMethod({
            method: "remove_product",
            args: {
                product_id: id, //string
            },
        }),
    getProduct: (id) =>
        shopCore.viewMethod({
            method: "get_product",
            args: {
                product_id: id, //string
            },
        }),
    getProducts: (ids) =>
        shopCore.viewMethod({
            method: "get_products",
            args: {
                product_ids: [...ids], //string[]
            },
        }),
    getAllProducts: () =>
        shopCore.viewMethod({
            method: "get_all_products",
        }),
    confirmOrder: (id) =>
        shopCore.callMethod({
            method: "confirm_order",
            args: {
                tx_id: id, //string
            },
        }),
    getTxsOf: (id) =>
        shopCore.viewMethod({
            method: "get_txs_of",
            args: {
                account_id: id, //string
            },
        }),
    transferTokens: (receiverId, amount) =>
        tokenCore.callMethod({
            method: "ft_transfer",
            args: {
                receiver_id: receiverId,
                amount,
                memo: "Reward",
            },
            deposit: 1,
        }),
};
