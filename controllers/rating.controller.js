const Rating = require("../models/rating.model");
const {
     getAll,
      getOne,
      createOne,
      updateOne,
      deleteOne,
     } = require("./generic.controllers");

const createRating = createOne(Rating, "Rating");
const updateRating = updateOne(Rating,"Rating");
const getAllRating = getAll(Rating);
const getRating =  getOne( Rating,"Rating")
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