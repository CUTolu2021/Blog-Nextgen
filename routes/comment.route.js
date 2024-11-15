const express = require("express");
const {
    createComment,
    getComment,
    getAllComment,
    deleteComment,
    updateComment
} = require("../controllers/comment.controller");

const commentRouter = express.Router();

commentRouter.route("/").get(getAllComment).post(createComment);

commentRouter.route("/:id")
    .get(getComment)
    .patch(updateComment)
    .delete(deleteComment);

module.exports = commentRouter;