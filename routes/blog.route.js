const express = require("express");
const {
  createBlogPost,
  getAllPost,
  getAllById,
  deleteBlogPost,
  updateBlogPost,
  sameUserBlog,
} = require("../controllers/blog.controller");
const { adminUser } = require("../controllers/user.controller");
const {
  verifyJWTAuthToken,
  restrictTo,
} = require("../middleware/authFunctions");

const blogRouter = express.Router();

blogRouter
  .route("/")
  .get(getAllPost)
  .post(verifyJWTAuthToken, restrictTo(["admin", "author"]), createBlogPost);

blogRouter
  .route("/:id")
  .get(getAllById)
  .patch(verifyJWTAuthToken, sameUserBlog, updateBlogPost)
  .delete(verifyJWTAuthToken, sameUserBlog, deleteBlogPost);

module.exports = blogRouter;
