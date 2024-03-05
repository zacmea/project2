//Require modules
// require('dotenv').config()
const express = require('express')
// const app = express()
const methodOverride = require('method-override')

//set port
const PORT = process.env.PORT || 3003

// const db = require('./models')

const collectionsCtrl = require('./controllers/collectionController')
const userCtrl = require('./controllers/userController')
const wineCtrl = require('./controllers/wineController')

//creating express app
const app = express()

//Setting app configs
app.set('view engine', 'ejs')
// app.set('view', path.join(__dirname, 'views'))

//Setting middlewares to use
app.use(express.static('public')) //where the static files are housed
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));

//Telling our app to look at appropriate controllers for different rout prefixes
app.use('/users', userCtrl)
app.use('/collections', collectionsCtrl)
app.use('/wines', wineCtrl)

app.get('/', (req, res) =>{
    res.send(hello)
})
// The "catch-all" route: Runs for any other URL that doesn't match the above routes
// app.get('*', function (req, res) {
//     res.render('404')
// });


app.listen(port, () =>{
    console.log("Wine server operating on port", PORT);
})