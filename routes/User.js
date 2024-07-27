const express = require("express");
const router = express.Router();

const { login, signup, sendotp } = require("../controllers/Auth");
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");

//User login Route
router.post("/login", login);

//User Signup Route
router.post("/signup", signup);

//Otp Send Route
router.post("/sendotp", sendotp);

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken);

// Route for resetting user password
router.post("/reset-password", resetPassword);

module.exports = router;
