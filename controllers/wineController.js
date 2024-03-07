//Remember that all routes here are prefixed with /wines

const express = require('express')
const router = express.Router()

// const db = require('../models')

router.get('/', (req, res) =>{
    res.render("wine-show.ejs")
})

module.exports = router