//connect schema to mongoose
const mongoose = require('mongoose')

//Defining how things should look in the database
const collectionSchema = new mongoose.Schema({
    name: String,
    numberOfWines: Number,
    winesIncluded: [{type: mongoose.Schema.Types.ObjectId, ref: 'Wine'}],
    isPublic: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

//Defining how data will be called in DB
const Collection = mongoose.model('Collection', collectionSchema)


module.exports = Collection