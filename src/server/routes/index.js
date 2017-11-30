const router = require('express').Router()
const memberRoutes = require('./members')
const authRoutes = require('./auth')
const postRoutes = require('./posts')

router.get('/', (request, response) => {
  response.render('common/roam-home')
})

router.get('/logout', (request, response) => {
  request.session.destroy(err => console.log)
  response.redirect('/member/login')
})

router.use('/signup', authRoutes)

module.exports = router
