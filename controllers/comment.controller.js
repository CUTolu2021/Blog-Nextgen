
const Comment = require("../models/comment.model");
const {
     getAll,
      getOne,
      createOne,
      updateOne,
      deleteOne,
     } = require("./generic.controllers");

const createComment = createOne(Comment, "Comment");
const updateComment = updateOne(Comment,"Comment");
const getAllComment = getAll(Comment);
const getComment =  getOne( Comment,"Comment")
const getAllCommentByBlog = async (req, res) => {
    const getComment = await Comment.find({ blog: req.params.blogId });
    res.json(getComment);
}
const deleteComment = deleteOne (Comment,"Comment")


module.exports = {
    createComment,
    updateComment,
    getAllComment,
    getComment,
    getAllCommentByBlog,
    deleteComment
}