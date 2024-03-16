//Remember: everything here is prefixed with /sessions

const bcrypt = require("bcrypt");
const router = require('express').Router()
const db = require('../models/') //This will require the index.js file in the models folder, which in turn...?
const isAuthenticated = require("./isAuthenticated");
// router.use(isAuthenticated);

//-------ROUTES------
//New - get LOGIN form
router.get('/new', (req, res) => {
    res.render("sessions-new.ejs", {currentUser: req.session.currentUser})
})

router.post('/', async (req, res) => {
    //1) Find user trying to log in
    //2)Compare passwords
    const foundUser = await db.User.findOne({username: req.body.username})
    if(!foundUser){
            return res.send("User not found")
    }else if( await bcrypt.compareSync(req.body.password, foundUser.password)){
            req.session.currentUser = foundUser  //HEY YOU!!  This adds currentUser to the req.session object, so we can query the db where owner of an item is the currentUser.id
            console.log("Successfully logged in!");
            res.redirect('/')
    }else {
            res.send("Invalid password")
            .then(res.redirect('/sessions/new'))
    }
})
        
//Logout / Destroy session
router.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})

module.exports = router  