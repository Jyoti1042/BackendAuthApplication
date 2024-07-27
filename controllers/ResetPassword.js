const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { validateEmail, validatePassword } = require("../utils/validators");


//Geerate reset password token
exports.resetPasswordToken = async (req, res) => {
  try {
    //check user exist on not
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        success: false,
        message: `This Email: ${email} is not Registered With Us Enter a Valid Email`,
      });
    }
    const token = crypto.randomBytes(20).toString("hex"); //Crypto method for generating random bytes

    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 3600000,
      },
      { new: true } //return updated document
    );
    console.log("DETAILS", updatedDetails);

    const url = `http://localhost:3000/update-password/${token}`;

    await mailSender(
      email,
      "Password Reset",
      `Please click on this url to reset your password- ${url}.`
    );

    res.json({
      success: true,
      message: "Email Sent Successfully, Please Check Your Email",
    });
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Sending the Reset Message`,
    });
  }
};
//Reset password mail
exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;

	  // Validate password strength
	  if (!validatePassword(password)) {
		return res.status(400).json({
		  success: false,
		  message:
			"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
		});
	  }
 

    if (confirmPassword !== password) {
      return res.json({
        success: false,
        message: "Password and Confirm Password Does not Match",
      });
    }
    const userDetails = await User.findOne({ token: token });
    if (!userDetails) {
      return res.json({
        success: false,
        message: "Token is Invalid",
      });
    }

    if (!(userDetails.resetPasswordExpires > Date.now())) {
      //logic for check token is expired or not
      return res.status(403).json({
        success: false,
        message: `Token is Expired, Please Regenerate Your Token`,
      });
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.findOneAndUpdate(
      { token: token },
      { password: encryptedPassword },
      { new: true }
    );
    res.json({
      success: true,
      message: `Password Reset Successful`,
    });
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Updating the Password`,
    });
  }
};
