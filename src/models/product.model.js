const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        discount: {
            type: String,
        },
        count: {
            type: Number,
        },
        description: {
            type: String,
        },
        img: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema, "product");
