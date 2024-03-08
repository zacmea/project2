//connect schema to mongoose
const mongoose = require('mongoose')

//Defining how things should look in the database
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String
})

//Defining how data will be called in DB
const User = mongoose.model('User', userSchema)


module.exports = User