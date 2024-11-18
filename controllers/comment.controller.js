const Comment = require("../models/comment.model");

const {
     getAll,
      getOne,
      createOneAndUpdateBlog,
      updateOne,
      deleteOne,
     } = require("./generic.controllers");

const createComment = createOneAndUpdateBlog(Comment, "Comment");
const updateComment = updateOne(Comment,"Comment");
const getAllComment = getAll(Comment);
const getComment =  getOne( Comment,"Comment")

//This function uses the route: comment/blogs/:blogId and gets all comments by blog
const getAllCommentByBlog = async (req, res) => {
    console.log(req.query);
    const getComment =  Comment.find({ blog: req.params.blogId })
    const data = await getComment.limit(req.query.limit)
    .skip(req.query.skip*req.query.limit)
    .sort(req.query.sort);
    const totalCount = await Comment.countDocuments({ blog: req.params.blogId });
    console.log(totalCount);
    
    res.json({
        data,
        totalCount
    }
    );
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