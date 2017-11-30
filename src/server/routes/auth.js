const members = require('../../models/database/members')
const router = require('express').Router()
const bcrypt = require('bcrypt')

router.get('/', (request, response) => {
  response.render('auth/signup')
})

module.exports = router;
