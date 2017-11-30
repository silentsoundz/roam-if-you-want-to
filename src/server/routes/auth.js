const members = require('../../models/database/members')
const router = require('express').Router()
const bcrypt = require('bcrypt')

router.get('/signup', (request, response) => {
  response.render('auth/signup')
})

router.get('/login', (request, response) => {
  response.render('auth/login')
})

module.exports = router
