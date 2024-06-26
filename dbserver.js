require('dotenv').config()  //  DOTENV FILE
const mongoose = require('mongoose')

//const mongodb_url="mongodb+srv://aryangangwar63332:aryan2005@api.sqkn1lj.mongodb.net/myapi"  //Local database

mongoose.connect(process.env.mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, // Increase connection timeout to 30 seconds (default is 30000)
    socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds (default is 45000)
});

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
