const User = require("../models/user.js");


module.exports.renderSignupForm = (req,res)=>{
    res.render("./users/signup.ejs");
}

module.exports.signup = async(req,res)=>{
    try{
        let {username,email,password} = req.body;
        let newUser = new User({
            username,email
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