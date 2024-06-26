require('dotenv').config()  //  DOTENV FILE
const mongoose = require('mongoose')

//const mongodb_url="mongodb+srv://aryangangwar63332:aryan2005@api.sqkn1lj.mongodb.net/myapi"  //Local database

mongoose.connect(process.env.mongodb_url)

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("Connected to database")
})
db.on("err",(err)=>{
    console.log("Error in connecting to database")
})
db.on("disconnected",()=>{
    console.log("Disconnected to database")
})

module.exports = db