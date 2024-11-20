const { get } = require("mongoose");
const Rating = require("../models/rating.model");
const {
  getAll,
  getOne,
  createOneAndUpdateBlog,
  getRatingAndCommentByBlog,
  updateOne,
  deleteOne,
} = require("./generic.controllers");

const createRating = createOneAndUpdateBlog(Rating, "Rating");
const updateRating = updateOne(Rating, "Rating");
const getAllRating = getAll(Rating);
const getRating = getOne(Rating, "Rating");

//This function uses the route: comment/blogs/:blogId and gets all comments by blog
const getAllRatingbyBlog = getRatingAndCommentByBlog(Rating, "Ratings");
const deleteRating = deleteOne(Rating, "Rating");

const sameUserRating = async (req, res, next) => {
  const data = await Rating.findById(req.params.id);
  if (JSON.stringify(req.user.user._doc._id) !== JSON.stringify(data.user))
    return res
      .status(401)
      .json({
        message:
          "You cannot modify this rating. You don't have control over this",
      });
  next();
};

module.exports = {
  createRating,
  updateRating,
  getAllRating,
  getRating,
  getAllRatingbyBlog,
  deleteRating,
  sameUserRating,
};
