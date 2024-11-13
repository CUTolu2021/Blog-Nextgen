const express = require("express");
const {
    createBlogPost,
    getAllPost,
    getAllById,
    deleteBlogPost
} = require("../controllers/blog.controller");

const BlogRouter = express.Router();

BlogRouter.route("/").get(getAllPost).post(createBlogPost);

BlogRouter.route("/:id")
  .get(getAllById)
  
  .delete(deleteBlogPost);

module.exports = BlogRouter;