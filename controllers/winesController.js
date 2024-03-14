//Remember that all routes here are prefixed with /wines

const express = require('express')
const router = express.Router()

const db = require('../models') //this will require the index.js file in the models folder, which in turn requires the WineModel.js file

//-------ROUTES------
//Index - this will be the "browse all wines" page
router.get('/', (req, res) =>{
    // const vinos =  //This will return an array of all the wines in the db
    const allWines = [db.Wine.find({})]
    res.render("wine-index-browse.ejs", {allWines})
    
})

//New
router.get('/new', (req, res) =>{
    res.render("wine-new.ejs")
})

//Delete

//Update

//Create
router.post('/', (req, res) =>{
    res.render("wine-show.ejs")
})

//Edit

//Show
router.get('/:id', (req, res) =>{
    res.render("wine-show.ejs")
})

module.exports = router