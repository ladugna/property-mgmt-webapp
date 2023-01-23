/**
 * home.js
 */
 "use stict";

 const express =require("express");
 const path= require("path");
 const homePageRouter= express.Router();
 
 //define homepage router
homePageRouter.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../views/public-pages", "index.html"));
});

homePageRouter.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../views/public-pages", "index.html"));
});

module.exports= homePageRouter;
