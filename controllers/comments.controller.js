const CommentsService = require("../services/comments.service");

class CommentsController {
  constructor() {
    this.commentsService = new CommentsService();
  }

  async getComments(req, res) {
    try {
      const comments = await this.commentsService.getComments();
      res.send(comments);
    } catch (err) {
      console.log(err);
      res.status(500).send("ERROR!!!");
    }
  }

  async createComment(req, res) {
    try {
      const content = req.body;
      await this.commentsService.createComment(content);
      res.status(200).send("Comment Created!");
    } catch (err) {
      console.log(err);
      res.status(500).send("ERROR!!!");
    }
  }

  async getComment(req, res) {
    try {
      const { id } = req.params;
      const comment = await this.commentsService.getComment(id);
      res.send(comment);
    } catch (err) {
      console.log(err);
      res.status(500).send("ERROR!!!");
    }
  }

  async deleteComment(req, res) {
    try {
      const { id } = req.params;
      const comment = await this.commentsService.deleteComment(id);
      res.send(comment)
    } catch (err) {
      console.log(err);
      res.status(500).send("ERROR!!!");
    }
  }
}

module.exports = CommentsController;
