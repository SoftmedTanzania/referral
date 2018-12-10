/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_request_information table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"BackReferralRequestInformationController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const BackReferralRequestInformationController = require('../../controllers/back_referrals/BackReferralRequestInformationController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_back_referral_request_information', urlencodedParser,function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			
			BackReferralRequestInformationTypeId:request.body.BackReferralRequestInformationTypeId,
			BackReferralId:request.body.BackReferralId,
			BackRefferralRequestInformation:request.body.BackRefferralRequestInformation,
			RecordedBy:request.body.RecordedBy,
			RecordedDate:date
			
			
			
      
        };
	
	      
          var myBackReferralRequestInformationControllerObjectPromise = BackReferralRequestInformationController.insert_back_referral_request_information(jsonObject_);
	          
		   
		   myBackReferralRequestInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_back_referral_request_information',urlencodedParser,function(request,response){
    
    var myBackReferralRequestInformationControllerObjectPromise = BackReferralRequestInformationController.get_all_back_referral_request_information();
	      
		   
		   myBackReferralRequestInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_back_referral_request_information',urlencodedParser,function(request,response){
	   
	 var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    BackReferralRequestInformationTypeId:request.body.BackReferralRequestInformationTypeId,
			BackReferralId:request.body.BackReferralId,
			BackRefferralRequestInformation:request.body.BackRefferralRequestInformation,
			RecordedBy:request.body.RecordedBy,
			RecordedDate:date
		
      
        };
	
     
     var myBackReferralRequestInformationControllerObjectPromise = BackReferralRequestInformationController.batch_back_referral_request_information_update(jsonObject_);
	   
		   
		   myBackReferralRequestInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_back_referral_request_information',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myBackReferralRequestInformationControllerObjectPromise = BackReferralRequestInformationController.get_specific_back_referral_request_information(mKey,mValue);
	        
		   
		   myBackReferralRequestInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_back_referral_request_information',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	      var date = new Date();
	      date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		    BackReferralRequestInformationTypeId:request.body.BackReferralRequestInformationTypeId,
			BackReferralId:request.body.BackReferralId,
			BackRefferralRequestInformation:request.body.BackRefferralRequestInformation,
			RecordedBy:request.body.RecordedBy,
			RecordedDate:date
		
      
           };
	
               
                var myBackReferralRequestInformationControllerObjectPromise = BackReferralRequestInformationController.individual_back_referral_request_information_update(column_name,value_,jsonObject_);
	         	        
		   
		   myBackReferralRequestInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_back_referral_request_information',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    
    var myBackReferralRequestInformationControllerObjectPromise = BackReferralRequestInformationController.delete_back_referral_request_information_types_record(column_name,value_);
	      	        
		   
		   myBackReferralRequestInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




