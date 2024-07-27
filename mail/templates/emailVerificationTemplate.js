const otpTemplate = (otp) => {
  return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	       .container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
		   .btn{
				  padding: 10px 20px;
					background-color:orange;
					text:black;
					margin-bottom: 20px;
					font-weight: 900;
					border-radius: 5px;
					font-size: 17px;
				}
          .message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}
          .highlight {
				font-weight: bold;
			}
				
		</style>
	
	</head>
	
	<body>
		<div class="container">
			<button class="btn">Bright Champs</button>
			<div class="message">OTP Verification Email</div>
			<div class="body">
				<p>Dear User,</p>
				<p>Thank you for registering with BrightChamps. To complete your registration, please use the following OTP
					(One-Time Password) to verify your account:</p>
				<h2 class="highlight">${otp}</h2>
				<p>This OTP is valid for 5 minutes.
				</p>
			</div>
			
		</div>
	</body>
	
	</html>`;
};
module.exports = otpTemplate;
