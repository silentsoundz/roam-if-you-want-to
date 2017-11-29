DROP TABLE IF EXISTS member;
CREATE TABLE member (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  pic_url VARCHAR(1000),
  password VARCHAR(255) NOT NULL,
  current_city VARCHAR(255) NOT NULL,
  date_joined TIMESTAMP DEFAULT now());

DROP TABLE IF EXISTS post:
CREATE TABLE post (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  member_id INTEGER references member(id),
  post_entry TEXT NOT NULL);