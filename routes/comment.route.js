const express = require("express");
const {
  createComment,
  getComment,
  getAllComment,
  deleteComment,
  updateComment,
  getAllCommentByBlog,
} = require("../controllers/comment.controller");

const commentRouter = express.Router();
const { verifyJWTAuthToken } = require("../middleware/authFunctions");
const { sameUser } = require("../controllers/user.controller");

commentRouter
  .route("/")
  .get(getAllComment)
  .post(verifyJWTAuthToken, createComment);
commentRouter.route("/blogs/:blogId").get(getAllCommentByBlog);

commentRouter
  .route("/:id")
  .get(getComment)
  .patch(verifyJWTAuthToken, sameUser, updateComment)
  .delete(verifyJWTAuthToken, sameUser, deleteComment);

module.exports = commentRouter;
