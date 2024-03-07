//Remember that all routes here are prefixed with //users

const express = require('express')
const router = express.Router()

// const db = require('../models')

router.get('/', (req, res) =>{
    res.render("user.ejs")
})

module.exports = router