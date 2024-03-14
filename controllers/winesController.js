//Remember that all routes here are prefixed with /wines

const express = require('express')
const router = express.Router()

const db = require('../models') //this will require the index.js file in the models folder, which in turn requires the WineModel.js file

//-------ROUTES------
//Index - this will be the "browse all wines" page
router.get('/', (req, res) =>{
    db.Wine.find({})
    .then(wines => {
        res.render("wine-index-browse.ejs", {wines})
    })
})

//New
router.get('/new', (req, res) =>{
    res.render("wine-new.ejs")
})

//Delete

//Update

//Create
router.post('/', async (req, res) =>{
    // req.body.collexn = SOME STUFF;
    await db.Wine.create(req.body)
        .then(wine => res.redirect(`/wines/${wine.id}`))
})

//Edit

//Show
router.get('/:id', (req, res) =>{
    res.render("wine-show.ejs")
})

module.exports = router