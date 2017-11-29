const db = require('./db')

const createPost = (title, member_id, post_entry) =>
  db.one(
    `INSERT INTO
    post (title, member_id, post_entry)
    VALUES
    ($1, $2, $3)
    RETURNING *;`,
    [title, member_id, post_entry]
  )


const destroyPost = id =>
  db.one(
    `DELETE FROM
    post
    WHERE
    id = $1
    RETURNING *;`,
    [id]
  )


const updatePost = (id, title, post_entry) =>
  db.one(
    `UPDATE
    post
    SET
    title = $2, post_entry = $3
    WHERE id = $1
    RETURNING *;`,
    [id, title, post_entry]
  )


const getPostByPostId = id =>
  db.one(
    `SELECT
    *
    FROM
    post
    WHERE id = $1`,
    [id]
  )


const getPosts = () =>
  db.any(`SELECT * FROM post`)


const getPostsByMemberId = member_id =>
  db.any(
    `SELECT
    *
    FROM
    post
    WHERE member_id = $1`,
    [member_id]
  )


module.exports = {
  createPost,
  destroyPost,
  updatePost,
  getPostByPostId,
  getPosts,
  getPostsByMemberId
}
