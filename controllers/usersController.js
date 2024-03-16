//Remember that all routes here are prefixed with /users

const router = require('express').Router()
const bcrypt = require("bcrypt");

const db = require('../models/') //This will require the index.js file in the models folder, which in turn requires the UserModel.js file


//------------------ROUTES------------------
//default starting point **MAYBE DELETE THIS**
// router.get('/', (req, res) => {
//     res.render("user.ejs", {
//         db,
//         currentUser: req.session.currentUser})
// })


//New User--Get form
router.get('/new', (req, res) => {
    res.render("user-new.ejs", {currentUser: req.session.currentUser})
})

//Create User--Post form
router.post('/', async (req, res) => {
        //overwrite user PW w hashed PW, then pass that in to our db
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        //create user based on req.body data
        const newUser = await db.User.create(req.body)
        console.log(newUser);
        res.redirect('/')    
})

//SHOW (profile page)
router.get('/:id', async (req, res) => {
    const user = await db.User.findById(req.params.id)
    res.render('user-show.ejs', {user})
})



module.exports = router