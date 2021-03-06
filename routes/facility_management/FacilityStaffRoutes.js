/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facility_staff table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"FacilityStaffController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const FacilityStaffController = require('../../controllers/facility_management/FacilityStaffController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_facility_staff', urlencodedParser,function(request,response){
	   
	  
	   
        var	jsonObject_ = {
         
		    
			
			
			
			UserId:request.body.UserId,
			FacilityId:request.body.FacilityId
			
			
			
				
      
        };
	
	      
          var myFacilityStaffControllerObjectPromise = FacilityStaffController.insert_facility_staff(jsonObject_);
	          
		   
		   myFacilityStaffControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_facility_staff',urlencodedParser,function(request,response){
   
    var myFacilityStaffControllerObjectPromise = FacilityStaffController.get_all_facility_staff();
	      
		   
		   myFacilityStaffControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_facility_staff',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    UserId:request.body.UserId,
			FacilityId:request.body.FacilityId
		
      
        };
	
     
     var myFacilityStaffControllerObjectPromise = FacilityStaffController.batch_facility_staff_update(jsonObject_);
	   
		   
		   myFacilityStaffControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_facility_staff',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myFacilityStaffControllerObjectPromise = FacilityStaffController.get_specific_facility_staff(mKey,mValue);
	        
		   
		   myFacilityStaffControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });



router.post('/inner_join_facility_with_facility_staff',urlencodedParser,function(request,response){
        var SearchValue=request.body.UserId;
       
        var myFacilityStaffControllerObjectPromise = FacilityStaffController.inner_join_facility_with_facility_staff(SearchValue)
	        
		   
		   myFacilityStaffControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_facility_staff',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    UserId:request.body.UserId,
			FacilityId:request.body.FacilityId
		
      
           };
	
                
                var myFacilityStaffControllerObjectPromise = FacilityStaffController.individual_facility_staff_update(column_name,value_,jsonObject_);
	         	        
		   
		   myFacilityStaffControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_facility_staff',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
   
    var myFacilityStaffControllerObjectPromise = FacilityStaffController.delete_facility_staff_record(column_name,value_);
	      	        
		   
		   myFacilityStaffControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




