const {Schema} = require("mongoose");
const {model} = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
});
userSchema.plugin(passportLocalMongoose);
module.exports =  model("User",userSchema);