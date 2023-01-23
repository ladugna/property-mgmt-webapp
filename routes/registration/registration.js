// "use strict";

const express= require("express");
const path= require("path");
const tenantController= require("../../controller/tenantController");
const tenantRoutes=express.Router();

tenantRoutes.get("/list11", (req,res)=>{
   
    const tenantDatas= tenantController.getTenantData();

    res.render("public-pages/tenant", {tenantDatas:tenantDatas});
});
tenantRoutes.get("/tenant/list11", (req,res)=>{
    res.sendFile(path.join(__dirname, "../../views/public-pages", "tenant.html"));
});

tenantRoutes.post("/list11", (req,res)=>{
    controller.createNewPatient(req,res);
    res.redirect(303, "/tenant/list11");
})



module.exports=tenantRoutes;