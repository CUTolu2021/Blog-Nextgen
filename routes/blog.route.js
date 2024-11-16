const express = require("express");
const {
    createBlogPost,
    getAllPost,
    getAllById,
    deleteBlogPost,
    updateBlogPost
} = require("../controllers/blog.controller");
const {verifyJWTAuthToken} = require("../middleware/authFunctions");


const blogRouter = express.Router();

blogRouter.route("/").get(getAllPost).post(verifyJWTAuthToken,createBlogPost);

blogRouter.route("/:id")
  .get(getAllById)
  .patch(updateBlogPost)
  .delete(deleteBlogPost);

module.exports = blogRouter;