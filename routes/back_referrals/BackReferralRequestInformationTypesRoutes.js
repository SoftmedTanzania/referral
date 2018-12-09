/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_request_information_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"BackReferralRequestInformationTypesController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const BackReferralRequestInformationTypesController = require('../../controllers/back_referrals/BackReferralRequestInformationTypesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_back_referral_request_information_types', urlencodedParser,function(request,response){
	   
	  
	   
        var	jsonObject_ = {
         
		    
			
			
			
			BackReferralRequestInformationTypeDescription:request.body.BackReferralRequestInformationTypeDescription
			
			
			
      
        };
	
	      var myBackReferralRequestInformationTypesControllerObject=new BackReferralRequestInformationTypesController();
          var myBackReferralRequestInformationTypesControllerObjectPromise = myBackReferralRequestInformationTypesControllerObject.insert_back_referral_request_information_types(jsonObject_);
	          
		   
		   myBackReferralRequestInformationTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_back_referral_request_information_types',urlencodedParser,function(request,response){
    var myBackReferralRequestInformationTypesControllerObject=new BackReferralRequestInformationTypesController();
    var myBackReferralRequestInformationTypesControllerObjectPromise = myBackReferralRequestInformationTypesControllerObject.get_all_back_referral_request_information_types();
	      
		   
		   myBackReferralRequestInformationTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_back_referral_request_information_types',urlencodedParser,function(request,response){
	   
	 
	
    var	jsonObject_ = {
         
		    BackReferralRequestInformationTypeDescription:request.body.BackReferralRequestInformationTypeDescription
		
      
        };
	
     var myBackReferralRequestInformationTypesControllerObject=new BackReferralRequestInformationTypesController();
     var myBackReferralRequestInformationTypesControllerObjectPromise = myBackReferralRequestInformationTypesControllerObject.batch_back_referral_request_information_types_update(jsonObject_);
	   
		   
		   myBackReferralRequestInformationTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_back_referral_request_information_types',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myBackReferralRequestInformationTypesControllerObject=new BackReferralRequestInformationTypesController();


        var myBackReferralRequestInformationTypesControllerObjectPromise = myBackReferralRequestInformationTypesControllerObject.get_specific_back_referral_request_information_types(mKey,mValue);
	        
		   
		   myBackReferralRequestInformationTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_back_referral_request_information_types',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	      
	
          var	jsonObject_ = {
         BackReferralRequestInformationTypeDescription:request.body.BackReferralRequestInformationTypeDescription
		
		
      
           };
	
                var myBackReferralRequestInformationTypesControllerObject=new BackReferralRequestInformationTypesController();
                var myBackReferralRequestInformationTypesControllerObjectPromise = myBackReferralRequestInformationTypesControllerObject.individual_back_referral_request_information_types_update(column_name,value_,jsonObject_);
	         	        
		   
		   myBackReferralRequestInformationTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_back_referral_request_information_types',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myBackReferralRequestInformationTypesControllerObject=new BackReferralRequestInformationTypesController();
    var myBackReferralRequestInformationTypesControllerObjectPromise = myBackReferralRequestInformationTypesControllerObject.delete_back_referral_request_information_types_record(column_name,value_);
	      	        
		   
		   myBackReferralRequestInformationTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




