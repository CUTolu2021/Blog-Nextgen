const express = require("express");
const {
    createBlogPost,
    getAllPost,
    getAllById,
    deleteBlogPost,
    updateBlogPost
} = require("../controllers/blog.controller");
const { sameUser, adminUser } = require("../controllers/user.controller");
const {verifyJWTAuthToken} = require("../middleware/authFunctions");


const blogRouter = express.Router();

blogRouter.route("/").get(getAllPost).post(verifyJWTAuthToken,adminUser,createBlogPost);

blogRouter.route("/:id")
  .get(getAllById)
  .patch(verifyJWTAuthToken,sameUser,updateBlogPost)
  .delete(verifyJWTAuthToken, sameUser,deleteBlogPost);

module.exports = blogRouter;