import mongoose from 'mongoose'


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    autoIndex: true
}

mongoose.connect('mongodb:///root:12345@db_mongoose:27017/docker-db', options).then((res)=>{
    console.log("Connected to mongodb.", res)
}).catch((err)=>{
    console.log("connect db failed:", err)
})

module.exports = mongoose
