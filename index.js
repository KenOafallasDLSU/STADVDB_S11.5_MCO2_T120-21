//dependencies
const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')

//creates express app
const app = express()
const port = 8080

//create hbs engine
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultView: 'main',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials')
}))

app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//database connection
const mysql = require('./mysql.js')
mysql.db.connect((err) => {
  if (err) throw err
  console.log("MySQL Connected")
})

//import routes
const home = require('./routes/homeRoutes.js')
const query2 = require('./routes/query2Routes.js')
const query1 = require('./routes/query1Routes.js')
const query3 = require('./routes/query3Routes.js')
const query4 = require('./routes/query4Routes.js')

//use routes
app.use('/', home)
app.use('/query2', query2)
app.use('/query1', query1)
app.use('/query3', query3)
app.use('/query4view', query4)


//static hosting
app.use(express.static('public'))

//listener
app.listen(port, function() {
  console.log('App listening at port ' + port)
})