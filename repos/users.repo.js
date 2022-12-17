const pool = require("../utils/pool");

class UsersRepo {
  constructor() {}

  getUsers() {
    return pool.query("SELECT * FROM users");
  }

  createUser({ username, password, haircolor }) {
    return pool.query(
      "INSERT INTO users (username, password, haircolor) VALUES ($1, $2, $3)",
      [username, password, haircolor]
    );
  }

  editUser({ username, password, haircolor, id }) {
    return pool.query(
      "UPDATE users set username = $1, haircolor = $2, password = $3 WHERE id = $4",
      [username, haircolor, password, id]
    );
  }

  deleteUser({ id }) {
    return pool.query("DELETE FROM users WHERE id = $1", [id]);
  }

  getUser(id) {
    return pool.query(
      "SELECT u.username, c.comment_text FROM users as u LEFT JOIN comments as c ON u.id = c.user_id WHERE u.id = $1",
      [id]
    );
  }
}

module.exports = UsersRepo;
