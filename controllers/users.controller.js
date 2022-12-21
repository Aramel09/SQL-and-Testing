const UsersService = require("../services/users.service");

class UsersController {
  constructor() {
    this.usersService = new UsersService();
  }

  async getUsers(req, res) {
    try {
      const users = await this.usersService.getUsers();
      res.send(users);
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
    }
  }

  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await this.usersService.getUser(id);
      res.send(user);
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
    }
  }

  async createUser(req, res) {
    try {
      const content = req.body;
      await this.usersService.createUser(content);
      res.status(200).send("User Created");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
    }
  }

  async deleteUser(req, res, userId) {
    try{
      const idInfo = {id: userId}
      this.usersService.deleteUser(idInfo)
      res.status(200).send("User Deleted")
    }
    catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
  }}
}

module.exports = UsersController;
