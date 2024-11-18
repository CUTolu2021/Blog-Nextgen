const Blog = require("../models/blog.model");
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require("./generic.controllers");

const createBlogPost = createOne(Blog, "Blog");
const updateBlogPost = updateOne(Blog, "Blog");
const getAllPost = getAll(Blog);
const getAllById = getOne(Blog, "Blog");
const deleteBlogPost = deleteOne(Blog, "Blog");

module.exports = {
  createBlogPost,
  updateBlogPost,
  getAllPost,
  getAllById,
  deleteBlogPost,
};
