const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/user.js");




//get login & post login
router
.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,
    passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}),
    userController.login
);

//get signup & post signup
router
.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup)
);


// otp Verification

router.route("/user/otp/verification")
.get(userController.renderOtp)
.post(userController.otpVerification);



//LOG OUT
router.get("/logout",userController.logout);

module.exports = router;