const members = require('../../models/database/members')
const router = require('express').Router()

router.get('/members', (request, response, next) => {
  const { member_id } = request.session
  members.getMemberById(member_id)
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
