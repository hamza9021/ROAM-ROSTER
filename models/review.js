const mongoose = require("mongoose");
const {model} = require("mongoose");
const {Schema} = require("mongoose");


const reviewSchema = new Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
});

const Review = model("Review",reviewSchema);
module.exports = Review;