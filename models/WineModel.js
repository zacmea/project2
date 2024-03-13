//connect schema to mongoose
const mongoose = require('mongoose')

//Defining how things should look in the database
const wineSchema = new mongoose.Schema({
    name: String,
    link: String,
    thumb: String,
    country: String,
    region: String,
    average_rating: mongoose.Decimal128,
    ratings: Number,
    price: mongoose.Decimal128,
    notes: String
})
// const wineSchema = new mongoose.Schema({
//     brand: String,
//     vintage: Number,
//     varietal: String,
//     price: Decimal128,
//     region: String,
//     notes: String,
//     isRecommended: Boolean
// })
//Defining how data will be called in DB
const Wine = mongoose.model('Wine', wineSchema)
module.exports = Wine