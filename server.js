//Require modules
const dotenv = require('dotenv')
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const path = require('path');


//set port
const PORT = process.env.PORT || 3003

//Setting DB connection
require('./config/database')
//Requiring/connecting controllers
const collectionsCtrl = require('./controllers/collectionController')
const userCtrl = require('./controllers/userController')
const wineCtrl = require('./controllers/wineController')

//creating express app
const app = express()

//Setting app configs
app.set('view engine', 'ejs')
// app.set('view', path.join(__dirname, 'views'))  What's this line for again?? It breaketh the code

//Setting middlewares to use
app.use(express.static('public')) //where the static files are housed
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));

//Telling our app to look at appropriate controllers for different rout prefixes
app.use('/users', userCtrl)
app.use('/collections', collectionsCtrl)
app.use('/wines', wineCtrl)

//-----ROUTES-----
//Default
app.get('/', (req, res) =>{
    res.send("hello")
})

//"catch-all" route: for any URL that doesn't match any defined routes
app.get('*', function (req, res) {
    res.render('404')
});


app.listen(PORT, () =>{
    console.log("Wine server pouring from 'pour-t'", PORT);
})