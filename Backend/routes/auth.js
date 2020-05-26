const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { signout, signup, signin } = require("../controller/auth");

router.get("/signout", signout);

router.post(
  "/signup",
  [
    check("username")
      .isLength({ min: 3 })
      .withMessage("name should be atleast 3 characters"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("password should be atleast 5 characters"),
    check("email").isEmail().withMessage("should be a valid email"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("password")
      .isLength({ min: 5 })
      .withMessage("password should be atleast 5 characters"),
    check("email").isEmail().withMessage("should be a valid email"),
  ],
  signin
);

module.exports = router;
