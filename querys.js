const ALL_POSTS = "SELECT * FROM posts ORDER BY created_at";

const INSERT_POST = 'INSERT INTO posts(name, description) VALUES($1, $2) RETURNING *';
const DELETE_POST = "DELETE FROM posts WHERE id= $1 RETURNING *"

module.exports = {
    ALL_POSTS: ALL_POSTS,
    INSERT_POST: INSERT_POST,
    DELETE_POST: DELETE_POST
};