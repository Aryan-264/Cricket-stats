const express = require('express')
const app = express()


const cors = require('cors');
app.use(cors())

const PORT = process.env.PORT || 3000

const bodyParser = require("body-parser")
app.use(bodyParser.json())

const dbserver = require('./dbserver')

const Player = require('./models/stats')

const router = require('./Routes/router')
app.use("/go",router)

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Welcome to CRICKET STATS.COM</h1>")
})


const start = async ()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`Server started at port ${PORT}` )
        })
    }
    catch(err){
        console.log("err")
    }
}

start()