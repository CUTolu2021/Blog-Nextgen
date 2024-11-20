const Comment = require("../models/comment.model");

const {
  getAll,
  getOne,
  createOneAndUpdateBlog,
  getRatingAndCommentByBlog,
  updateOne,
  deleteOne,
} = require("./generic.controllers");

const createComment = createOneAndUpdateBlog(Comment, "Comment");
const updateComment = updateOne(Comment, "Comment");
const getAllComment = getAll(Comment);
const getComment = getOne(Comment, "Comment");

//This function uses the route: comment/blogs/:blogId and gets all comments by blog
const getAllCommentByBlog = getRatingAndCommentByBlog(Comment, "Comments");
const deleteComment = deleteOne(Comment, "Comment");
const sameUserComment = async (req, res, next) => {
  const data = await Comment.findById(req.params.id);
  if (JSON.stringify(req.user.user._doc._id) !== JSON.stringify(data.user))
    return res
      .status(401)
      .json({
        message:
          "You cannot modify this comment. You don't have control over this",
      });
  next();
};

module.exports = {
  createComment,
  updateComment,
  getAllComment,
  getComment,
  getAllCommentByBlog,
  deleteComment,
  sameUserComment,
};
