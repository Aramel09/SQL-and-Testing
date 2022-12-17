const express = require("express");
const UsersController = require("../controllers/users.controller");

const userRouter = express.Router();

const usersController = new UsersController();

userRouter.get("/users", (req, res) => usersController.getUsers(req, res));
userRouter.get("/user/:id", (req, res) => usersController.getUser(req, res));
userRouter.post("/user", (req, res) => usersController.createUser(req, res));
// put
// delete
module.exports = userRouter;
