const members = require('../../models/database/members')
const router = require('express').Router()

router.get('/:username', (request, response, next) => {
  const { username } = request.params
  const { member_id } = request.session
  members.getMemberByUsername(username)
    .then((member) => {
      if (member.id === member_id) {
        response.render('member/members', {
          iOwnThis: true,
          authenticated: true,
          full_name: member.full_name,
          current_city: member.current_city,
          join_date: member.date_joined
        })
      } else {
        response.render('member/members', {
          iOwnThis: false,
          authenticated: true,
          full_name: member.full_name,
          current_city: member.current_city,
          join_date: member.date_joined
        })
      }
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = router
