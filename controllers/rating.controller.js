const Rating = require("../models/rating.model");
const {
     getAll,
      getOne,
      createOneAndUpdateBlog,
      updateOne,
      deleteOne,
     } = require("./generic.controllers");

const createRating = createOneAndUpdateBlog(Rating, "Rating");
const updateRating = updateOne(Rating,"Rating");
const getAllRating = getAll(Rating);
const getRating =  getOne( Rating,"Rating")

//This function uses the route: comment/blogs/:blogId and gets all comments by blog
const getAllRatingbyBlog = async (req, res) => {
    const getRating = await Rating.find({ blog: req.params.blogId });
    res.json(getRating);
}
const deleteRating= deleteOne (Rating,"Rating")

module.exports = {
    createRating,
    updateRating,
    getAllRating,
    getRating,
    getAllRatingbyBlog,
    deleteRating
}