const router = require('express').Router()
const memberRoutes = require('./members')
const authRoutes = require('./auth')
const postRoutes = require('./posts')

router.get('/', (request, response) => {
  response.render('common/roam-home.pug')
})

router.get('/logout', (request, response) => {
  request.session.destroy(err => console.log)
  response.redirect('/member/login.pug')
})



module.exports = router