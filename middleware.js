const Listing = require("./models/listing");
const Review = require("./models/review.js");
const {listingSchema,reviewSchema} = require("./schema.js");
const CustomError = require("./utils/CustomError.js");

module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You Must Be Log In To Create A Listing");
        res.redirect("/login");
    }
    else{
        next();
    }
}

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}


module.exports.isOwner = async(req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(req.user._id)){
        req.flash("error","You are not the owner of this listing");
        return res.redirect("/listings");
    }
    next();
}


module.exports.isAuthor = async(req,res,next)=>{
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}


module.exports.validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        throw new CustomError(400,result.error);
    }
    else{
        next();
    }
}


module.exports.validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        throw new CustomError(400,result.error);
    }
    else{
        next();
    }
}