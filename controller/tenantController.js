

"use strict";


const Tenant= require("../model/tenant");


const tenantData = require("../data/tenantData");

const tenantController= (function(){

   const getTenantData=function(){
      
       return tenantData.getData();

   }

   return {
     getTenantData:getTenantData,
     
   }

})();

module.exports=tenantController;