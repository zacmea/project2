//connect schema to mongoose
const mongoose = require('mongoose')

//Defining how things should look in the database
const collexnSchema = new mongoose.Schema({
    name: String,
    numberOfWines: Number,
    winesIncluded: [{type: mongoose.Schema.Types.ObjectId, ref: 'Wine'}],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

//Defining how data will be called in DB
const Collexn = mongoose.model('Collexn', collexnSchema)


module.exports = Collexn