const posts = require('../../models/database/posts')
const router = require('express').Router()


router.get('/:postId', (request, response, next) => {
  const { postId } = request.params
  posts.getPostByPostId(postId)
    .then((post) => {
      response.render('posts/post', {
        title: post.title,
        member_id: post.member_id,
        post_entry: post.post_entry,
      })
    })
    .catch((error) => {
      next(error)
    })
})


module.exports = router
