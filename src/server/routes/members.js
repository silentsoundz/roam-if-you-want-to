const members = require('../../models/database/members')
const post = require('../../models/database/posts')
const router = require('express').Router()

router.get('/:username', (request, response, next) => {
  const { username } = request.params
  const { member_id } = request.session
  const memberAttributes = {}
  members.getMemberByUsername(username)
    .then((member) => {
      if (member.id === member_id) {
        memberAttributes.iOwnThis = true
        memberAttributes.authenticated = true
        memberAttributes.full_name = member.full_name
        memberAttributes.current_city = member.current_city
        memberAttributes.join_date = member.date_joined
      } else {
        memberAttributes.iOwnThis = false
        memberAttributes.authenticated = true
        memberAttributes.full_name = member.full_name
        memberAttributes.current_city = member.current_city
        memberAttributes.join_date = member.date_joined
      }
    })
    .then(() => {
      post.getPostsByMemberId(member_id)
        .then((postsArray) => {
          response.render('member/members', {
            iOwnThis: memberAttributes.iOwnThis,
            authenticated: memberAttributes.authenticated,
            full_name: memberAttributes.full_name,
            current_city: memberAttributes.current_city,
            join_date: memberAttributes.join_date,
            posts: postsArray,
          })
        })
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = router
