//Remember that all routes here are prefixed with /collections

const express = require('express')
const router = express.Router()



const db = require('../models')  //not working!!


//-------ROUTES------
//Index - this will be the "browse all collections" page
router.get('/', (req, res) =>{
    res.render("collections-index.ejs")
})

//New - get form    //This route should be the form to create a new collection
router.get('/new', (req, res) =>{
    res.render("collections-new.ejs")
})

//Delete
//Update
//Create - post form
router.post('/', (req, res) =>{
    res.render("collections-show.ejs")
})
router.get('/:id', (req, res) =>{
    const id= req.params.id
    res.render("collections-show.ejs", {id})
})


module.exports = router