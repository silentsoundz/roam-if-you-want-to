const members = require('../../models/database/members')
const router = require('express').Router()

router.get('/:username', (request, response, next) => {
  const { username } = request.params
  const { member_id } = request.session
  members.getMemberByUsername(username)
    .then((member) => {
      response.render('member/members', {
        authenticated: true,
        username: member.username,
        current_city: member.current_city,
        join_date: member.date_joined
      })
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = router
