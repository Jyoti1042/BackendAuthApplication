const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

const mailSender = async (email, title, body) => {
  // Create a transporter to send emails, define options and send mail

  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

  

    let info = await transporter.sendMail({
      from: "BrightChamps",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
