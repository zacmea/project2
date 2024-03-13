//Remember that all routes here are prefixed with /users

const router = require('express').Router()


// const db = require('../models/index')
const bcrypt = require("bcrypt");
// const bodyParser = require("body-parser");
// const saltRounds = 5;

const db = require('../models/') //This will require the index.js file in the models folder, which in turn requires the UserModel.js file


//------------------ROUTES------------------
//default starting point
router.get('/', (req, res) => {
    res.render("user.ejs", {db, User})
})
//New User--Get form
router.get('/new', (req, res) => {
    res.render("user-new.ejs")
})

//Create User--Post form
router.post('/', async (req, res) => {
    try{
        //overwrite user PW w hashed PW, then pass that in to our db
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        //create user based on req.body data
        const newUser = await db.User.create(req.body)
        console.log(newUser);
        res.redirect('/')
})

router.get('/login', (req, res) => {
    create: async (req, res) => {
        if (req.body.username && req.body.password) {
            const { username, password } = req.body;
            const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));
            let newUser = {
                username,
                password: passwordHash,
            };
            try {
                const createdUser = await db.User.create(newUser);
                console.log(createdUser);
                res.redirect('/users/login');
            } catch (error) {
                console.log(error);
                res.send('Internal Server Error');
            }
        }
    }
    res.render("user.ejs", {newUser})
})





module.exports = router