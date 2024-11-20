const express = require("express");
const {
  createRating,
  getRating,
  getAllRating,
  deleteRating,
  getAllRatingbyBlog,
  updateRating,
  sameUserRating,
} = require("../controllers/rating.controller");

const { verifyJWTAuthToken } = require("../middleware/authFunctions");

const ratingRouter = express.Router();
ratingRouter
  .route("/")
  .get(getAllRating)
  .post(verifyJWTAuthToken, createRating);
ratingRouter.route("/blogs/:blogId").get(getAllRatingbyBlog);

ratingRouter
  .route("/:id")
  .get(getRating)
  .patch(verifyJWTAuthToken, sameUserRating, updateRating)
  .delete(verifyJWTAuthToken, sameUserRating, deleteRating);

module.exports = ratingRouter;
