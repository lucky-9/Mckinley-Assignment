const express = require("express");
const router = express.Router();

const { getUserById, getUser, getUsers } = require("../controller/user");
const { isSignedin, isAuthenticated } = require("../controller/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedin, isAuthenticated, getUser);
router.get("/users", getUsers);

module.exports = router;
