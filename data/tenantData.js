
// "use strict";

const tenantData = (function(){
    const tenantDatas = [
        
        {apartment: "301A, Floor:3, Excelsior North Tower",fullName :"Alan K.Jones", phone:"(641)123-0009",email:"akjones@domain.com"},
        {apartment: "148B,Floor:1, Excelsior South Tower",fullName: "Barbara Lynn Smith", phone:"(321)001-1234",email:"blsmith@email.com"}
    ];

    const getData = function() {
        return tenantDatas;
    }

    const saveNewTenant= function(newTenant){
        tenantDatas.push(newTenant);
    }

    return {
        getData: getData,
        //saveNewTenant:saveNewTenant
    }

})();

module.exports = tenantData;