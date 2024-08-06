
    require('dotenv').config()


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodoverride = require("method-override");
const ejsMate = require("ejs-mate");
const CustomError = require("./utils/CustomError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");


const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));
app.use(methodoverride("_method"));
// app.use(helmet());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);




const MONGO_URL = process.env.MONGO_ATLAS_URL;

(async function connect(){
    await mongoose.connect(MONGO_URL);
})()
.then((res)=>{
    console.log("Connected To Database");
})
.catch((err)=>{
    console.log(err);
});

const store = MongoStore.create({
    mongoUrl:MONGO_URL,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter: 24*3600,
});

store.on("error",()=>{
    console.log("Error In Mongo Session Store ",err);
});

const sessionOptions = {
    store:store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 7 * 24 * 60 * 60 * 1000, 
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly:true, //FOR CROSS SITE SCRIPTING (XSS)
    }
} 

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});





app.use("/listings",listingsRouter);
app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);



app.all("*",(req,res,next)=>{
    next(new CustomError(404,"Page Not Found"));
});

app.use((err,req,res,next)=>{
    let{status=500,message="Random Error"} = err;
    res.status(status);
    res.render("error.ejs",{message});
});


const port = 8080;
app.listen(port,()=>{
    console.log("Listening at port 8080");
});