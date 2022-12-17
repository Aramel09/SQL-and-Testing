// https://expressjs.com/en/starter/installing.html

// https://postgresapp.com/
const express = require("express");

const bodyParser = require("body-parser");
const userRouter = require("../routes/user.router");
const commentRouter = require("../routes/comments.router");

function createServer() {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(userRouter);
  app.use(commentRouter);

  return app;
}

module.exports = createServer;
