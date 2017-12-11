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
  response.redirect('/login')
})

router.use('/', authRoutes)
router.use('/member', memberRoutes)

module.exports = router
