/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facility_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"FacilityTypesController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const FacilityTypesController = require('../../controllers/facility_management/FacilityTypesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_facility_types', urlencodedParser,function(request,response){
	   
	  
	   
        var	jsonObject_ = {
         
		    
			
			
			FacilityTypeDescription:request.body.FacilityTypeDescription,
			FacilityHierarchyCode:request.body.FacilityHierarchyCode
			
			
			
				
      
        };
	
	      
          var myFacilityTypesControllerObjectPromise = FacilityTypesController.insert_facility_types(jsonObject_);
	          
		   
		   myFacilityTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_facility_types',urlencodedParser,function(request,response){
    
    var myFacilityTypesControllerObjectPromise = FacilityTypesController.get_all_facility_types();
	      
		   
		   myFacilityTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_facility_types',urlencodedParser,function(request,response){
	   
	  var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    FacilityTypeDescription:request.body.FacilityTypeDescription,
			FacilityHierarchyCode:request.body.FacilityHierarchyCode
		
      
        };
	
     
     var myFacilityTypesControllerObjectPromise = FacilityTypesController.batch_facility_types_update(jsonObject_);
	   
		   
		   myFacilityTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_facility_types',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myFacilityTypesControllerObjectPromise = FacilityTypesController.get_specific_facility_types(mKey,mValue);
	        
		   
		   myFacilityTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_facility_types',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         FacilityTypeDescription:request.body.FacilityTypeDescription,
			     FacilityHierarchyCode:request.body.FacilityHierarchyCode
		
      
           };
	
       
         var myFacilityTypesControllerObjectPromise = FacilityTypesController.individual_facility_types_update(column_name,value_,jsonObject_);
	         	        
		   
		   myFacilityTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_facility_types',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
   
    var myFacilityTypesControllerObjectPromise = FacilityTypesController.delete_facility_types_record(column_name,value_);
	      	        
		   
		   myFacilityTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




