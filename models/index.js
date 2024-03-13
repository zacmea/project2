const express = require('express')

require('dotenv').config()
const mongoose = require('mongoose')

//Connect to the database
mongoose.connect(process.env.MONGODBURI)
const db = mongoose.connection

//Set up an event listener to fire once when the connection 'opens' 
db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host} on port ${db.port}`)
})

module.exports = {
    Wine: require('./WineModel'),
    seedWines: require('./Seed'),
    User: require('./UserModel'),
    Collection: require('./CollectionModel')
}    