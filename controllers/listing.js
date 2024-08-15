const Listing = require("../models/listing.js");
const CustomError = require("../utils/CustomError.js");
const maptilerclient = require("@maptiler/client");
maptilerclient.config.apiKey = process.env.MAP_TILER_API;

module.exports.index = async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.catogery = async(req,res)=>{
    let {catogeryList} = req.params;
    let catogeryListings = await Listing.find({catogery:catogeryList});
    res.render("listings/catogery.ejs",{catogeryListings});
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res, next) => {
    try {
        const { location } = req.body.listing;
        console.log(req.body);

        // Fetch coordinates from MapTiler Geocoding API
        const result = await maptilerclient.geocoding.forward(location);

        if (result && result.features && result.features.length > 0) {
            
            // Create a new listing with coordinates
            let url = req.file.path;
            let filename = req.file.filename;
            let newListing = new Listing(req.body.listing);
            newListing.owner = req.user._id;
            newListing.image = { url, filename };
            newListing.geometry = {
                type: "Point",
                coordinates: result.features[0].geometry.coordinates
            };
            await newListing.save();
            req.flash("success", "New Roam Created");
            res.redirect("/listings");
        } else {
            throw new CustomError(400, "Unable to find location coordinates. Please check the address.");
        }
    } catch (error) {
        console.error(error);
        next(new CustomError(500, "Error creating listing. Please try again."));
    }
};

module.exports.showListings = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: { path: "author" }
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Roam Does Not Exist");
        res.redirect("/listings");
    } else {
        res.render("listings/show.ejs", { listing });
    }
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    if (!listing) {
        req.flash("error", "Roam Does Not Exist");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateFormListing = async (req, res) => {
    if (!req.body.listing) {
        throw new CustomError(400, "Send Valid Data For Roam!");
    }
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }); //await Listing.findByIdAndUpdate(id,req.body.listing);

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    res.redirect(`/listings/${id}`);
};

module.exports.deleteForm = async (req, res) => {
    let { id } = req.params;
    console.log(id);
    await Listing.findOneAndDelete({ _id: id });
    res.redirect("/listings");
};


