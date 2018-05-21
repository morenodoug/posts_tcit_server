const ALL_POSTS = "SELECT * FROM posts ORDER BY created_at";

const INSERT_POST = 'INSERT INTO posts(name, description) VALUES($1, $2) RETURNING *';

module.exports = {
    ALL_POSTS: ALL_POSTS,
    INSERT_POST: INSERT_POST
};