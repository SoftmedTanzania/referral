/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facility_to_facility_referral_information_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"FacilityToFacilityReferralInformationController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const FacilityToFacilityReferralInformationController = require('../../controllers/facility_to_facility_referrals/FacilityToFacilityReferralInformationController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_facility_to_facility_referral_information', urlencodedParser,function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			FacilityToFacilityReferralInformationTypeId:request.body.FacilityToFacilityReferralInformationTypeId,
			FacilityToFacilityReferralId:request.body.FacilityToFacilityReferralId,
			Information:request.body.Information,
			RecordedBy:request.body.RecordedBy,
			RecordedDate:date
			
			
			
      
        };
	
	      var myFacilityToFacilityReferralInformationControllerObject=new FacilityToFacilityReferralInformationController();
          var FacilityToFacilityReferralInformationControllerPromise = myFacilityToFacilityReferralInformationControllerObject.insert_facility_to_facility_referral_information(jsonObject_);
	          
		   
		   FacilityToFacilityReferralInformationControllerPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_facility_to_facility_referral_information',urlencodedParser,function(request,response){
   var myFacilityToFacilityReferralInformationControllerObject=new FacilityToFacilityReferralInformationController();
    var myFacilityToFacilityReferralInformationControllerObjectPromise = myFacilityToFacilityReferralInformationControllerObject.get_all_facility_to_facility_referral_information();
	      
		   
		   myFacilityToFacilityReferralInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_facility_to_facility_referral_information',urlencodedParser,function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    FacilityToFacilityReferralInformationTypeId:request.body.FacilityToFacilityReferralInformationTypeId,
			FacilityToFacilityReferralId:request.body.FacilityToFacilityReferralId,
			Information:request.body.Information,
			RecordedBy:request.body.RecordedBy,
			RecordedDate:date
		
      
        };
	
      var myFacilityToFacilityReferralInformationControllerObject=new FacilityToFacilityReferralInformationController();
      var myFacilityToFacilityReferralInformationControllerObjectPromise = myFacilityToFacilityReferralInformationControllerObject.batch_facility_to_facility_referral_information_update(jsonObject_);
	   
		   
		   myFacilityToFacilityReferralInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_facility_to_facility_referral_information',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myFacilityToFacilityReferralInformationControllerObject=new FacilityToFacilityReferralInformationController();


        var myFacilityToFacilityReferralInformationControllerObjectPromise = myFacilityToFacilityReferralInformationControllerObject.get_specific_facility_to_facility_referral_information(mKey,mValue);
	        
		   
		   myFacilityToFacilityReferralInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_facility_to_facility_referral_information_types',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	      var date = new Date();
	      date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		    FacilityToFacilityReferralInformationTypeId:request.body.FacilityToFacilityReferralInformationTypeId,
			FacilityToFacilityReferralId:request.body.FacilityToFacilityReferralId,
			Information:request.body.Information,
			RecordedBy:request.body.RecordedBy,
			RecordedDate:date
		
      
           };
	
                var myFacilityToFacilityReferralInformationControllerObject=new FacilityToFacilityReferralInformationController();
                var myFacilityToFacilityReferralInformationControllerObjectPromise = myFacilityToFacilityReferralInformationControllerObject.individual_facility_to_facility_referral_information_update(column_name,value_,jsonObject_);
	         	        
		   
		   myFacilityToFacilityReferralInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_facility_referral_information',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myFacilityToFacilityReferralInformationControllerObject=new FacilityToFacilityReferralInformationController();
    var myFacilityToFacilityReferralInformationControllerObjectPromise = myFacilityToFacilityReferralInformationControllerObject.delete_facility_to_facility_referral_information_record(column_name,value_);
	      	        
		   
		   myFacilityToFacilityReferralInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




