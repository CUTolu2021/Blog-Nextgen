const express = require("express");
const {
  createRating,
  getRating,
  getAllRating,
  deleteRating,
  getAllRatingbyBlog,
  updateRating,
} = require("../controllers/rating.controller");
const { sameUser } = require("../controllers/user.controller");

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
  .patch(verifyJWTAuthToken, sameUser, updateRating)
  .delete(verifyJWTAuthToken, sameUser, deleteRating);

module.exports = ratingRouter;
