/**
 * index.js
 */



const express= require("express");
const path= require("path");

 const homeRoutes= require("./routes/home/home");
const tenantRoutes=require("./routes/registration/registration");
const app= express();

console.log(`Web app server started  on `);

//define middlewares


app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug");


//setup express http request dataparser middleware

app.use(express.urlencoded({extended:false}));


//to add web API
app.use(express.json());

//set folder named "public" as a source folder for all static content/assets

app.use("/static", express.static(path.join(__dirname, "static-resources")));


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "views/public-pages", "index.html"));
});

//setup routes for homepage
app.use("", homeRoutes);

//setup routes for product Page
app.use("tenant", tenantRoutes);
app.use("/tenant/list11",(req,res)=>{
    res.sendFile(path.join(__dirname, "views/public-pages", "tenant.html"));
});


// app.use("*", (req, res, next) => {
//     console.log(`Responding with a 404 Error page`);
//     res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
//  });


const PORT_NUM=550;
app.listen(PORT_NUM,(req,res)=>{
    console.log(`Web app server started  listening on ${PORT_NUM}`)
});
