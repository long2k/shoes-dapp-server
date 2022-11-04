import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use("/", (req, res)=>{
    res.status(200).json("Welcome to shoes server")
})





app.listen(3000, ()=>{
    console.log(`server is running on port 3000`)
})
