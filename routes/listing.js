const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const {storage} = require("../cloudConfig.js");
const multer  = require('multer');
const upload = multer({ storage});


//INDEX ROUTE & CREATE ROUTE
router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,
        upload.single("listing[image]"),  
        // validateListing,
        wrapAsync(listingController.createListing)
);

//NEW Route
router.get("/new",isLoggedIn,listingController.renderNewForm);

//SHOW ROUTE & UPDATE ROUTE & DELETE ROUTE
router
    .route("/:id")
    .get(wrapAsync(listingController.showListings))
    .put(isLoggedIn,isOwner,upload.single("listing[image]"),
    // validateListing,
    wrapAsync(listingController.updateFormListing))
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.deleteForm));

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

//CATOGERY RENDER ROUTE
router.get("/catogery/:catogeryList",wrapAsync(listingController.catogery));


module.exports = router;