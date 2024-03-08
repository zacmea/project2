//Remember that all routes here are prefixed with /collections

const express = require('express')
const router = express.Router()



// const db = require('../models')  not working!!

router.get('/', (req, res) =>{
    res.render("collections-index.ejs")
})

router.get('/:id', (req, res) =>{
    const id= req.params.id
    res.render("collections-show.ejs", {id})
})


module.exports = router