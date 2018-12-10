/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facilities table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"FacilitiesController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const FacilitiesController = require('../../controllers/facility_management/FacilitiesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_facilities', urlencodedParser,function(request,response){
	   
	  
	   
        var	jsonObject_ = {
         
		    
			
			
			FacilityTypeId:request.body.FacilityTypeId,
			WardId:request.body.WardId,
			VillageId:request.body.VillageId,
			FacilityName:request.body.FacilityName,
			FacilityDescription:request.body.FacilityDescription,
			PhysicalAddress:request.body.PhysicalAddress,
			FacilityRefNo:request.body.FacilityRefNo
			
			
			
				
      
        };
	
	      
          var myFacilitiesControllerObjectPromise = FacilitiesController.insert_facilities(jsonObject_);
	          
		   
		   myFacilitiesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_facilities',urlencodedParser,function(request,response){
    
    var myFacilitiesControllerObjectPromise = FacilitiesController.get_all_facilities();
	      
		   
		   myFacilitiesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_facilities',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    FacilityTypeId:request.body.FacilityTypeId,
			WardId:request.body.WardId,
			VillageId:request.body.VillageId,
			FacilityName:request.body.FacilityName,
			FacilityDescription:request.body.FacilityDescription,
			PhysicalAddress:request.body.PhysicalAddress,
			FacilityRefNo:request.body.FacilityRefNo
		
      
        };
	
     
     var myFacilitiesControllerObjectPromise = FacilitiesController.batch_facilities_update(jsonObject_);
	   
		   
		   myFacilitiesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_facilities',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        

        var myFacilitiesControllerObjectPromise = FacilitiesController.get_specific_facilities(mKey,mValue);
	        
		   
		   myFacilitiesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_facilities',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    FacilityTypeId:request.body.FacilityTypeId,
			WardId:request.body.WardId,
			VillageId:request.body.VillageId,
			FacilityName:request.body.FacilityName,
			FacilityDescription:request.body.FacilityDescription,
			PhysicalAddress:request.body.PhysicalAddress,
			FacilityRefNo:request.body.FacilityRefNo
		
      
           };
	
                
                var myFacilitiesControllerObjectPromise = FacilitiesController.individual_facilities_update(column_name,value_,jsonObject_);
	         	        
		   
		   myFacilitiesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_facilities',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
   
    var myFacilitiesControllerObjectPromise = FacilitiesController.delete_facilities_record(column_name,value_);
	      	        
		   
		   myFacilitiesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




