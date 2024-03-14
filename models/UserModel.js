//connect schema to mongoose
const mongoose = require('mongoose')
// const Schema = mongoose.Schema

//Defining how things should look in the database
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    collexns: [{type: mongoose.Schema.Types.ObjectId, ref: 'Collexn'}]
})

//Defining how data will be called in DB
const User = mongoose.model('User', userSchema)
module.exports = User