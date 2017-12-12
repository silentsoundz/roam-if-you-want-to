const members = require('../../models/database/members')
const posts = require('../../models/database/posts')
const router = require('express').Router()


router.get('/:postId', (request, response, next) => {
  const { postId } = request.params
  const postAttributes = {}

  posts.getPostByPostId(postId)
    .then((post) => {
      postAttributes.title = post.title
      postAttributes.member_id = post.member_id
      postAttributes.post_entry = post.post_entry
    })
    .then(() => {
      members.getMemberById(postAttributes.member_id)
        .then((member) => {
          response.render('posts/post', {
            title: postAttributes.title,
            post_entry: postAttributes.post_entry,
            iOwnThis: member.iOwnThis,
            authenticated: member.authenticated,
            full_name: member.full_name,
            current_city: member.current_city,
            join_date: member.date_joined,
          })
        })
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = router
