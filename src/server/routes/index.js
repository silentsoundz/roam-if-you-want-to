const router = require('express').Router()
const memberRoutes = require('./members')
const authRoutes = require('./auth')
const postRoutes = require('./posts')
const middleware = require('./middlewares')

router.get('/', (request, response) => {
  response.render('common/roam-home')
})

router.get('/logout', (request, response) => {
  request.session.destroy(err => console.log)
  response.clearCookie('connect.sid')
  response.redirect('/login')
})

router.use('/', authRoutes)
router.use(middleware.isLoggedIn)
router.use('/member', memberRoutes)
router.use('/show', postRoutes)

module.exports = router
