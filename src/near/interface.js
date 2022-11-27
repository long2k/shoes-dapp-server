const { THREE_HUNDRED_TGAS } = require(".");
const { viewMethod, callMethod } = require("./core");

module.exports = {
    async addProduct(id, count, price) {
        try {
            return callMethod({
                method: "add_product",
                args: {
                    product_id: id, //string
                    quantity: count, //number
                    unit_price: price, //string
                },
                gas: THREE_HUNDRED_TGAS,
            });
        } catch (error) {
            throw error;
        }
    },
    async updateProduct(id, count, price) {
        try {
            return callMethod({
                method: "update_product",
                args: {
                    product_id: id, //string
                    quantity: count, //number
                    unit_price: price, //string
                },
                gas: THREE_HUNDRED_TGAS,
            });
        } catch (error) {
            throw error;
        }
    },
    async removeProduct(id) {
        try {
            return callMethod({
                method: "remove_product",
                args: {
                    product_id: id, //string
                },
                gas: THREE_HUNDRED_TGAS,
            });
        } catch (error) {
            throw error;
        }
    },
    async getProduct(id) {
        try {
            return await viewMethod({
                method: "get_product",
                args: {
                    product_id: id, //string
                },
            });
        } catch (error) {
            throw error;
        }
    },
    async getProducts(ids) {
        try {
            return await viewMethod({
                method: "get_products",
                args: {
                    product_ids: [...ids], //string[]
                },
            });
        } catch (error) {
            throw error;
        }
    },
    async getAllProducts() {
        try {
            return viewMethod({
                method: "get_all_products",
            });
        } catch (error) {
            throw error;
        }
    },
    async confirmOrder(id) {
        try {
            return callMethod({
                method: "confirm_order",
                args: {
                    tx_id: id, //string
                },
                gas: THREE_HUNDRED_TGAS,
            });
        } catch (error) {
            throw error;
        }
    },
    async getTxsOf(id) {
        try {
            return viewMethod({
                method: "get_txs_of",
                args: {
                    account_id: id, //string
                },
            });
        } catch (error) {
            throw error;
        }
    },
};
