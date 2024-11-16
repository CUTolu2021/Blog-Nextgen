const express = require("express");
const {
    createRating,
    getRating,
    getAllRating,
    deleteRating,
    getAllRatingbyBlog,
    updateRating
} = require("../controllers/rating.controller");

const ratingRouter = express.Router();
ratingRouter.route("/").get(getAllRating).post(createRating);
ratingRouter.route("/blogs/:blogId").get(getAllRatingbyBlog)

ratingRouter.route("/:id")
    .get(getRating)
    .patch(updateRating)
    .delete(deleteRating);

module.exports = ratingRouter;