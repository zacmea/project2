//Remember that all routes here are prefixed with /collexns

const express = require('express')
const router = express.Router()



const db = require('../models')  
const wines = require('../models/Seed')


//-------ROUTES------
//Index - this will be the "browse all collections" page
router.get('/', (req, res) =>{
    db.Collexn.find({user: req.session.currentUser._id})
    .then(collexns => {
        res.render("collections-index.ejs", {
            collexns,
        currentUser: req.session.currentUser})
    })
})

//New - get form    //This route should be the form to create a new collection
router.get('/new', async (req, res) =>{
    // let wines = db.Wine.find({}) //why does this not work?
    const wines = await db.Wine.find({})
      res.render("collections-new.ejs", {wines, currentUser: req.session.currentUser})
})
//Delete
//Update - put form to update
router.put('/collexns/:id', async (req, res) => {
    try {
        const { name, winesIncluded } = req.body;

        // Find the collection by ID and update its properties
        const updatedCollection = await Collection.findByIdAndUpdate(
            req.params.id,
            { name, winesIncluded },
            { new: true }
        );

        if (!updatedCollection) {
            return res.status(404).send('Collection not found');
        }

        res.redirect('/collexns'); // Redirect to collections list page
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

//Create - post form
router.post('/', async (req, res) => {
    const newCollexn = req.body
    newCollexn.user = req.session.currentUser._id 
    console.log(newCollexn);
    await db.Collexn.create(req.body)
        .then(collexn => {
            res.redirect(`/collexns/${collexn.id}`)
})
})


//Edit - get form
router.get('/:id/edit', async (req, res) => {
    const collexn = await db.Collexn.findById(req.params.id)
    const wines = await db.Wine.find({})
    res.render("collections-edit.ejs", {collexn, wines, currentUser: req.session.currentUser})
})

//Show
router.get('/:id', async (req, res) =>{
    const collexn = await db.Collexn.findById(req.params.id).populate('winesIncluded')
    const currentUser = await req.session.currentUser
    // console.log(currentUser);
    // let foundWine = await db.Collexn.winesIncluded.findById
        res.render("collections-show.ejs", {
            collexn,
            currentUser,
        });
    })


module.exports = router