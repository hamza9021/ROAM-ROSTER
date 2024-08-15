const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview,isLoggedIn,isAuthor} = require("../middleware.js");
const reviewController = require("../controllers/review.js");


//REVIEWS post route
router.post("/",
    isLoggedIn,
    validateReview,
    reviewController.createReview);
//DELETE REVIEW ROUTE
router.delete("/:reviewId",
    isAuthor,
    isLoggedIn,
    wrapAsync(reviewController.deleteReview)
);


module.exports = router;