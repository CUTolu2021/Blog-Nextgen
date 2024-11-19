const express = require("express");
const {
    createComment,
    getComment,
    getAllComment,
    deleteComment,
    updateComment,
    getAllCommentByBlog,
    sameUserComment
} = require("../controllers/comment.controller");

const commentRouter = express.Router();
const {verifyJWTAuthToken} = require("../middleware/authFunctions");

commentRouter.route("/").get(getAllComment).post(verifyJWTAuthToken,createComment);
commentRouter.route("/blogs/:blogId").get(getAllCommentByBlog);

commentRouter.route("/:id")
    .get(getComment)
    .patch(verifyJWTAuthToken, sameUserComment,updateComment)
    .delete(verifyJWTAuthToken, sameUserComment,deleteComment);

module.exports = commentRouter;