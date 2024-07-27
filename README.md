**Project Documentation**
<br><br>

**Overview:**
<br>
This project is a backend authentication system using Node.js, Express, and MongoDB.<br>
It includes features for user registration, login, OTP (One-Time Password) generation and verification, and password reset functionalities.<br>
The system uses JWT (JSON Web Tokens) for authentication and bcrypt for password hashing. Nodemailer Module is used for sending emails.<br><br><br>


**Project Structure:**
<br>
**config**
<br>
database.js: Configures and establishes a connection to MongoDB using Mongoose.<br>
controllers<br>
auth.js: Handles user authentication, including signup, login, and OTP sending.<br>
resetPassword.js: Manages password reset functionalities, including generating and verifying reset tokens.<br>
**models**
<br>
Otp.js: Defines the schema for storing OTPs.<br>
User.js: Defines the schema for storing user data.<br>
**routes**
<br>
User.js: Defines the routes for user-related operations (signup, login, send OTP, reset password).<br>
**utils**
<br>
mailSender.js: Utility for sending emails using Nodemailer. <br>
validators.js: Utility functions for validating email and password formats.<br>
**middlewares**
<br>
auth.js: Middleware for authenticating JWT tokens. <br><br><br>



**Key Functionalities:**
<br>
**1) User Authentication (controllers/auth.js)**
<br>
**Signup:**
<br>
Validates user input.<br>
Checks if the user already exists.<br>
Verifies OTP.<br>
Hashes the password using bcrypt.<br>
Creates a new user.<br>
**Login:**
<br>
Validates user input.<br>
Checks if the user exists.<br>
Compares the password using bcrypt. <br>
Generates a JWT token.<br>
Sets a cookie with the token.<br>
**Send OTP**:
<br>
Generates a unique OTP.<br>
Sends OTP to the user's email.<br>
Saves the OTP in the database with an expiration time of 5 minutes.<br>

**2) Password Reset (controllers/resetPassword.js)**
<br>
**Generate Reset Password Token:**
<br>
Generates a token using crypto.<br>
Updates the user document with the token and expiration time.<br>
Sends an email with the reset password link.<br>

**3) Reset Password**:
<br>
Validates the reset token.<br>
Checks if the token has expired.<br>
Hashes the new password using bcrypt.<br>
Updates the user's password.<br>

**4) Middleware (middlewares/auth.js)**
<br>
Extracts the token from cookies, request body, or headers.<br>
Verifies the token using JWT.<br>
Attaches the decoded token data to the request object.
<br>

**5) Utility Functions (utils/validators.js)** 
<br>
validateEmail: Validates the format of the email. <br>
validatePassword: Validates the strength of the password.<br>

**6) Email Template (mail/templates/emailVerificationTemplate.js)**
<br>
Provides an HTML template for the OTP verification email.<br><br><br>



**API Endpoints:**
<br>
User Routes (routes/User.js)<br>
POST /login: User login.<br>
POST /signup: User signup.<br>
POST /sendotp: Send OTP for email verification.<br>
POST /reset-password-token: Generate a reset password token.<br>
POST /reset-password: Reset user password.<br><br><br>


**Environment Variables:**
<br>
MONGODB_URL: MongoDB connection string.<br>
JWT_SECRET: Secret key for signing JWT tokens.<br>
MAIL_HOST: Host for the email service.<br>
MAIL_USER: Email service user.<br>
MAIL_PASS: Email service password.<br>
PORT: Port number on which the server runs.<br>

