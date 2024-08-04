const {Schema} = require("mongoose");
const {model} = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    DateOfBirth:{
        day:{
            type:String,
            required:true,
        },
        month:{
            type:String,
            required:true,
        },
        year:{
            type:String,
            required:true,
        },
    },
    gender:{
        type:String,
        required:true
    },
    verified:{
        type: Boolean, 
        default: false 
    }
});
userSchema.plugin(passportLocalMongoose);
module.exports =  model("User",userSchema);