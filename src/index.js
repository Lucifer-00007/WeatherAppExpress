const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3001;


// public static path
const staticFilesPath = path.join(__dirname, '../public')
app.use(express.static(staticFilesPath));

// Views folder path
const viewsPath = path.join(__dirname, '../templates/views')

const partialsPath = path.join(__dirname, '../templates/partials')


app.use(express.urlencoded({extended: true}));

// Set Template Engine
app.set('view engine', 'hbs');

// Set Views path
app.set('views', viewsPath);

// Register Partials Folder
hbs.registerPartials(partialsPath);

// routes
app.get('/', (req, res) => {
  res.render('index.hbs')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/weather', (req, res) => {
  // console.log(req.body)
  res.render('weather')
})


app.get('*/:val', (req, res) => {
  res.render('404', {
    errMsg: `Opps! '${req.params.val}' Page Not Found!`
  })
})


app.listen(port, () => {
  console.log(`Server running on port:${port}!`)
})







