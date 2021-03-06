const express = require('express')
require('dotenv').config()
const app = express()
const massive = require('massive')
const session = require('express-session')
const Auth_ctrl = require('./Auth_ctrl')



const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

app.use(express.json())

app.use( express.static( `${__dirname}/../build` ) );

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))

massive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
  console.log(`1- db is connected`)
  app.listen(SERVER_PORT, () => {
    console.log(`2-server is connected on ${SERVER_PORT}`)
  })
})

function messageMe (req, res, next) {
  
  console.log('good job')
  next()
}



app.post('/auth/login', messageMe,  Auth_ctrl.login)
app.post('/auth/register', Auth_ctrl.register)
app.get('/auth/logout', Auth_ctrl.logout)
app.get('/auth/users', Auth_ctrl.getUsers)
app.get('/auth/users/:title', Auth_ctrl.allUsers)
app.put('/auth/users/:id', Auth_ctrl.updateUser)

