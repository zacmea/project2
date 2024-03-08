const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODBURI)

const db = mongoose.connection

// console.log(db);
db.on('error', () =>{console.log("conxn error")})
db.on('connected', () =>{console.log("connected")})
db.on('disconnected', () =>{console.log("now disconnected")})