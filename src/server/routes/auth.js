const members = require('../../models/database/members')
const router = require('express').Router()
const bcrypt = require('bcrypt')

router.get('/signup', (request, response) => {
  response.render('auth/signup')
})

router.post('/signup', (request, response, next) => {
  const {
    full_name,
    username,
    email,
    pic_url,
    password,
    current_city
  } = request.body

  members.createMember(full_name, username, email, pic_url, password, current_city)
    .then((member) => {
      response.render('member/members', { username })
    })
    .catch((error) => {
      next(error)
    })
})

router.get('/login', (request, response) => {
  response.render('auth/login')
})

module.exports = router
