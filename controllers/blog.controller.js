const { Blog } = require("../models/blog.model");
const {
     getAll,
      getOne,
      createOne,
      deleteOne

     } = require("./generic.controllers");

const createBlogPost = createOne(Blog, "Blog");
const getAllPost = getAll(Blog);
const getAllById =  getOne( Blog,"Blog")
const deleteBlogPost = deleteOne (Blog,"Blog")


module.exports = {
    createBlogPost,
    getAllPost,
    getAllById,
    deleteBlogPost
}