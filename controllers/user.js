const User = require("../models/user.js");
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const OTP = require("../models/otp.js");


module.exports.renderSignupForm = (req,res)=>{
    res.render("./users/signup.ejs");
}

module.exports.signup = async(req,res)=>{
    try{
        console.log(req.body);
        let {username,email,password,gender,day,month,year,} = req.body;
        let newUser = new User({
            username,email,gender,DateOfBirth:{day,month,year}
        });
        let registeredUser = await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser,
            (err)=>{
                if(err){
                    next(err);
                }
                else{
                    req.flash("success","Welcome To Roam Roster");
                    res.redirect("/listings");
                }
        })
    }
    catch(err){
        req.flash("error",err.message);
        res.redirect("/signup")
        }
    }


module.exports.renderLoginForm = (req,res)=>{
    res.render("./users/login.ejs");
}

module.exports.login =  async(req,res)=>{
    req.flash("success","Welcome Back To Our Site");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = (req,res,next)=>{

    req.logOut((err)=>{
        if(err){
            next(err);
        }
        else{
            req.flash("success","You are logout");
            // console.log(req.flash);
            res.redirect("/listings");
        }
    })
}


module.exports.renderOtp = async(req,res)=>{
    console.log(req.user.email);
    if(req.user){
        let email = req.user.email;
        const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
        const newOtp = new OTP({email,otp});
        await newOtp.save();
    
    
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.MY_EMAIL,
              pass: process.env.ONLY_GPASS
            }
          });
    
    
          const mailOptions = {
            from: process.env.MY_EMAIL,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}`
          };
    
          await transporter.sendMail(mailOptions);
          res.render("users/otpVerification.ejs");
    }
}


module.exports.otpVerification = async(req,res)=>{
    let {otp} = req.body;
    let username = req.user.username;
    
    if(OTP.find({otp})){
        await User.findOneAndUpdate({username},{verified:true});
        res.redirect(`/listings`);
    }
}