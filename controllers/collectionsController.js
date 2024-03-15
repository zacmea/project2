//Remember that all routes here are prefixed with /collections

const express = require('express')
const router = express.Router()



const db = require('../models')  


//-------ROUTES------
//Index - this will be the "browse all collections" page
router.get('/', (req, res) =>{
    db.Collexn.find({user: req.session.currentUser.id})
    .then(collexns => {
        res.render("collections-index.ejs", {
            collexns,
        currentUser: req.session.currentUser})
    })
})

//New - get form    //This route should be the form to create a new collection
router.get('/new', (req, res) =>{
    res.render("collections-new.ejs", {currentUser: req.session.currentUser})
})

//Delete
//Update
//Create - post form
router.post('/', async (req, res) => {
    req.body.user = req.session.currentUser.id
    await db.Collexn.create(req.body)
        .then(collexn => res.redirect(`/collections/${collexn.id}`))
})
router.get('/:id', (req, res) =>{
    const id= req.params.id
    res.render("collections-show.ejs", {
        id,
        currentUser: req.session.currentUser})
})


module.exports = router