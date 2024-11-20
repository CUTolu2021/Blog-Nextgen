const express = require("express");
const {
  createBlogPost,
  getAllPost,
  getAllById,
  deleteBlogPost,
  updateBlogPost,
} = require("../controllers/blog.controller");
const { sameUser, adminUser } = require("../controllers/user.controller");
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
  .patch(verifyJWTAuthToken, sameUser, updateBlogPost)
  .delete(verifyJWTAuthToken, sameUser, deleteBlogPost);

module.exports = blogRouter;
