const express = require("express");
const {
  createBlogPost,
  getAllPost,
  getAllById,
  deleteBlogPost,
  updateBlogPost,
} = require("../controllers/blog.controller");
const { verifyJWTAuthToken, restrictTo } = require("../middleware/auth");

const BlogRouter = express.Router();

BlogRouter.route("/")
  .get(getAllPost)
  .post(verifyJWTAuthToken, restrictTo(["author", "admin"]), createBlogPost);

BlogRouter.route("/:id")
  .get(getAllById)
  .patch(updateBlogPost)
  .delete(deleteBlogPost);

module.exports = BlogRouter;
