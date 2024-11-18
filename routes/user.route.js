const express = require("express");
const {
  createUser,
  getUser,
  getAllUser,
  deleteUser,
  updateUser,
  signIn,
} = require("../controllers/user.controller");
const { hashPassword } = require("../middleware/hashPassword");
const { verifyJWTAuthToken, restrictTo } = require("../middleware/auth");

const userRouter = express.Router();

userRouter
  .route("/")
  .get(verifyJWTAuthToken, restrictTo(["admin", "author"]), getAllUser)
  .post(hashPassword, createUser);

userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

userRouter.route("/signin").post(signIn);

module.exports = userRouter;
