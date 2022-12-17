const express = require("express");
const CommentsController = require("../controllers/comments.controller");

const commentsRouter = express.Router();

const commentsController = new CommentsController();

commentsRouter.get("/comments", (req, res) =>
  commentsController.getComments(req, res)
);

commentsRouter.post("/comment", (req, res) =>
  commentsController.createComment(req, res)
);

commentsRouter.get("/comment/:id", (req, res) =>
  commentsController.getComment(req, res)
);

commentsRouter.delete("/comment/:id", (req, res) => 
  commentsController.deleteComment(req, res)  
) 

module.exports = commentsRouter;
