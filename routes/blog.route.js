const express = require("express");
const {
    createBlogPost,
    getAllPost,
    getAllById,
    deleteBlogPost,
    updateBlogPost
} = require("../controllers/blog.controller");

const blogRouter = express.Router();

blogRouter.route("/").get(getAllPost).post(createBlogPost);

blogRouter.route("/:id")
  .get(getAllById)
  .patch(updateBlogPost)
  .delete(deleteBlogPost);

module.exports = blogRouter;