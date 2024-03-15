//Remember that all routes here are prefixed with /wines

const express = require("express");
const router = express.Router();
const db = require("../models"); //this will require the index.js file in the models folder, which in turn requires the WineModel.js file
const isAuthenticated = require("./isAuthenticated");

router.use(isAuthenticated);
//-------ROUTES------
//Index - this will be the "browse all wines" page
router.get("/", (req, res) => {
    db.Wine.find({}).then((wines) => {
        res.render("wine-index-browse.ejs", {
            wines,
            currentUser: req.session.currentUser,
        });
    });
});

//New
router.get("/new", (req, res) => {
    res.render("wine-new.ejs", { currentUser: req.session.currentUser });
});

//Delete

//Update

//Create
router.post("/", async (req, res) => {
    const newWine = await db.Wine.create(req.body);
    console.log(newWine);
    res.redirect("/");
});
//Edit

//Show
router.get("/:id", (req, res) => {
    db.Wine.findById(req.params.id).then((wine) => {
        //the .then attaches following lines to the promise of the finding in the previous line, giving the promise variable name of "wine"
        res.render("wine-show.ejs", {
            wine,
            currentUser: req.session.currentUser,
        });
    });
});

module.exports = router;
