//connect schema to mongoose
const mongoose = require('mongoose')

//Defining how things should look in the database
const wineSchema = new mongoose.Schema({
    brand: String,
    varietal: String,
    vintage: Number,
    price: Decimal128,
    origin: String,
    notes: String,
    isRecommended: Boolean
})

//Defining how data will be called in DB
const Wine = mongoose.model('Wine', wineSchema)


module.exports = Wine