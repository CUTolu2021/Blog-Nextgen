const Blog  = require("../models/blog.model");
const {
     getAll,
      getOne,
      createOne,
      updateOne,
      deleteOne,
     } = require("./generic.controllers");

const createBlogPost = createOne(Blog, "Blog");
const updateBlogPost = updateOne(Blog,"Blog");
const getAllPost = getAll(Blog);
const getAllById =  getOne( Blog,"Blog")
const deleteBlogPost = deleteOne (Blog,"Blog")
const sameUserBlog = async (req, res, next) => {
    const data =  await Blog.findById(req.params.id);
    if (JSON.stringify(req.user.user._doc._id) !== JSON.stringify(data.author))
      return res.status(401).json({ message: "You cannot modify this blog. You don't have control over this" });
    next();
  };

module.exports = {
    createBlogPost,
    updateBlogPost,
    getAllPost,
    getAllById,
    deleteBlogPost,
    sameUserBlog
}