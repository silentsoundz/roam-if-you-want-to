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
      request.session.member_id = member.id
      response.redirect(`member/${member.username}`)
    })
    .catch((error) => {
      next(error)
    })
})

router.get('/login', (request, response) => {
  response.render('auth/login')
})

router.post('/login', (request, response, next) => {
  const {
    username,
    password
  } = request.body

  members.getMemberByUsername(username)
    .then((member) => {
      if (password === member.password) {
        request.session.member_id = member.id
        response.redirect(`member/${member.username}`)
      } else {
        response.render('auth/login')
      }
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = router
