const mongoose = require("mongoose");

var mongoURL='mongodb+srv://npal92095:ApeGtbUedEFeDsrH@cluster0.9n164xi.mongodb.net/StayPick'

mongoose.connect(mongoURL , {useUnifiedTopology :true ,useNewUrlParser:true})

var connection=mongoose.connection

connection.on('error',()=>{
    console.log('MongoDB Connection failed')
})

connection.on('connected',()=>{
    console.log('MongoDB Connection Successful')
})

module.exports=mongoose