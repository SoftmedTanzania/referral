/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the referral_service_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ReferralServiceTypesController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const ReferralServiceTypesController = require('../../controllers/referral_management/ReferralServiceTypesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_referral_service_types', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			
			ReferralServiceTypeDescription:request.body.ReferralServiceTypeDescription
			
			
			
      
        };
	
	      
          var myReferralServiceTypesControllerObjectPromise = ReferralServiceTypesController.insert_referral_service_types(jsonObject_);
	          
		   
		   myReferralServiceTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_referral_service_types',urlencodedParser,function(request,response){
    
    var myReferralServiceTypesControllerObjectPromise = ReferralServiceTypesController.get_all_referral_service_types();
	      
		   
		   myReferralServiceTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_referral_service_types',urlencodedParser,function(request,response){
	   
	 
	
    var	jsonObject_ = {
         
		    ReferralServiceTypeDescription:request.body.ReferralServiceTypeDescription
		
      
        };
	
    
     var myReferralServiceTypesControllerObjectPromise = ReferralServiceTypesController.batch_referral_service_types_update(jsonObject_);
	   
		   
		   myReferralServiceTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_referral_service_types',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myReferralServiceTypesControllerObjectPromise = ReferralServiceTypesController.get_specific_client_encounters(mKey,mValue);
	        
		   
		   myReferralServiceTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_referral_service_types',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    ReferralServiceTypeDescription:request.body.ReferralServiceTypeDescription
		
      
           };
	
               
                var myReferralServiceTypesControllerObjectPromise = ReferralServiceTypesController.individual_referral_service_types_update(column_name,value_,jsonObject_);
	         	        
		   
		   myReferralServiceTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_referral_service_types',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
   
    var myReferralServiceTypesControllerObjectPromise = ReferralServiceTypesController.delete_client_encounters_record(column_name,value_);
	      	        
		   
		   myReferralServiceTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




