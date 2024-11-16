const express = require("express");
const {
    createUser,
    getUser,
    getAllUser,
    deleteUser,
    updateUser
} = require("../controllers/user.controller");
const hashPassword = require("../middleware/hashPassword")

const userRouter = express.Router();

userRouter.route("/").get(getAllUser).post(hashPassword,createUser);

userRouter.route("/:id")
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = userRouter;