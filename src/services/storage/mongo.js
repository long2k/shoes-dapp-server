const mongoose = require('mongoose')


const options = {
    useNewUrlParser: true,
    autoIndex: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://127.0.0.1:27017/shose', options).then((res)=>{
    console.log("Connected to mongodb.")
}).catch((err)=>{
    console.log("connect db failed:", err)
})

module.exports =  mongoose
