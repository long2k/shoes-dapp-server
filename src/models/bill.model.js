const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BillSchema = new mongoose.Schema({
    product:[{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }],
    total: {
        type:String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: Number,
        enum: [0,1,2]
        // 0 : chưa thanh toán
        // 1 : loading 
        // 3 : đã thanh toán
    }
},{timestamps: true})

module.exports = mongoose.model('bill', BillSchema, 'bill')