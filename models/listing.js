const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        url: String,
        filename: String,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    geometry: {
        type: { 
            type: String, 
            enum: ['Point'], 
            required: true 
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    country: {
        type: String,
        required: true,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    catogery:{
        type:String,
        required:true
    }
});

listingSchema.post("findOneAndDelete", async (data) => {
    if (data) {
        await Review.deleteMany({ _id: { $in: data.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
