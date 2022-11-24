const mongoose = require('mongoose')


const options = {
    useNewUrlParser: true,
     useUnifiedTopology: true
}

mongoose.connect(config.mongoUrl, options).then((res)=>{
    console.log("Connected to mongodb.")
    console.log(config.mongoUrl)
}).catch((err)=>{
    console.log(config.mongoUrl)
    console.log("connect db failed:", err)
})

module.exports =  mongoose
