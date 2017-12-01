require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const pgSession = require('connect-pg-simple')
const methodOverride = require('method-override')

const app = express()

const routes = require('./server/routes')


app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
  store: new (pgSession(session))(),
  secret: "fuck you",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }
}))

app.use('/', routes)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
