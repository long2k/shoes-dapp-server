const mongoose = require('mongoose')


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
}

mongoose.connect('mongodb://localhost:27017/shose', options).then((res)=>{
    console.log("Connected to mongodb.")
}).catch((err)=>{
    console.log("connect db failed:", err)
})

module.exports =  mongoose
