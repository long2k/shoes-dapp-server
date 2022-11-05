const express = require('express')
const  bodyParser = require('body-parser') 
const cors = require('cors') 
require('./services/storage/mongo')  
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))


app.use(require('./middlewares/response'))
app.use(require('./routers'))
app.use("/", (req, res)=>{
    res.status(200).json("Welcome to shoes server")
})


app.listen(3000, ()=>{
    console.log(`server is running on port 3000`)
})
