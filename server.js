//Require modules
require("dotenv").config();
const dotenv = require("dotenv");
const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const session = require("express-session");
const bcrypt = require("bcrypt");
// const bodyParser = require("body-parser");

//set port & other necessary variables
const PORT = process.env.PORT || 3003;
const saltRounds = 5;
let plainTextPassword = "";

//Setting DB connection
// const db = require("./config/database");
const db = require("./models"); //This will require the index.js file in the models folder, which in turn requires the UserModel.js file
// const mongoose = require("mongoose");


//Requiring/connecting controllers
const collectionsCtrl = require("./controllers/collectionsController");
const userCtrl = require("./controllers/usersController");
const wineCtrl = require("./controllers/winesController");

//creating express app
const app = express();

//Setting app configs
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'))

//Setting middlewares to use
app.use(express.static("public")); //where the static files are housed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(                                 //req.send gets access to req.session--> Allows you to access the session in your various routes
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
    })
);

//Telling our app to look at appropriate controllers for different rout prefixes
app.use("/users", userCtrl);
app.use("/collections", collectionsCtrl);
app.use("/wines", wineCtrl);

//-----ROUTES-----
app.get("/seed", function (req, res) {
    db.Wine.deleteMany({}).then(() => {
        console.log("Deleted all wines");
    });
    db.Wine.insertMany(db.seedWines).then((addedWines) => {
        console.log(`Added ${addedWines.length} wines to be drunk`);
        res.json(addedWines);
    });
});

//Default
app.get("/", (req, res) => {
    res.send("hello");
});

//"catch-all" route: for any URL that doesn't match any defined routes
app.get("*", function (req, res) {
    res.render("404");
});

app.listen(PORT, () => {
    console.log("Wine server pouring from 'pour-t'", PORT);
});
