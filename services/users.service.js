const User = require("../models/user");
const UsersRepo = require("../repos/users.repo");

class UsersService {
  constructor() {
    this.usersRepo = new UsersRepo();
  }

  async getUsers() {
    const data = await this.usersRepo.getUsers();
    return data.rows;
  }

  async createUser({ username, password, haircolor }) {
    const newUser = new User(username, password, haircolor);
    return await this.usersRepo.createUser(newUser);
  }

  async getUser(userId) {
    const userRows = (await this.usersRepo.getUser(userId)).rows;

    const squashedUserRows = userRows.reduce(
      (prev, curr) => {
        prev.comments = [...prev.comments, curr.comment_text];
        return prev;
      },
      {
        author: userRows[0].username,
        comments: [],
      }
    );

    return squashedUserRows;
  }
}

module.exports = UsersService;
