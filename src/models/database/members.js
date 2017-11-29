const db = require('./db')

const createMember = (full_name, username, email, pic_url, password, current_city) =>
  db.one(
    `INSERT INTO
    member (full_name, username, email, pic_url, password, current_city)
    VALUES
    ($1, $2, $3, $4, $5, $6)
    RETURNING *;`,
    [full_name, username, email, pic_url, password, current_city]
  )

const destroyMember = id =>
  db.one(
    `DELETE FROM
    member
    WHERE
    id = $1
    RETURNING *;`,
    [id]
  )

const updateMember = (id, full_name, username, email, pic_url, password, current_city) =>
  db.one(
    `UPDATE
    member
    SET
    full_name = $2, username = $3, email = $4, pic_url = $5, password = $6, current_city = $7
    WHERE
    id = $1
    RETURNING *;`,
    [id, full_name, username, email, pic_url, password, current_city]
  )

const getMemberByUsername = username =>
  db.one(
    `SELECT
    *
    FROM
    member
    WHERE
    username = $1;`,
    [username]
  )

const getMemberById = id =>
  db.one(
    `SELECT
    *
    FROM
    member
    WHERE
    id = $1`,
    [id]
  )

const getMembers = () =>
  db.any(`SELECT * FROM member`)

module.exports = {
  createMember,
  destroyMember,
  updateMember,
  getMemberByUsername,
  getMemberById,
  getMembers
}
