/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facility_to_facility_referrals table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"FacilityToFacilityReferralsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const FacilityToFacilityReferralsController = require('../../controllers/facility_to_facility_referrals/FacilityToFacilityReferralsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_facility_to_facility_referrals', urlencodedParser,function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			
			ReferralId:request.body.ReferralId,
			FacilityId:request.body.FacilityId,
			FacilityReferredTo:request.body.FacilityReferredTo,
			FacilityToFacilityReferralDate:date
			
			
			
      
        };
	
	      
          var myFacilityToFacilityReferralsControllerObjectPromise = FacilityToFacilityReferralsController.insert_facility_to_facility_referrals(jsonObject_);
	          
		   
		   myFacilityToFacilityReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_facility_to_facility_referrals',urlencodedParser,function(request,response){
  
    var myFacilityToFacilityReferralsControllerObjectPromise = FacilityToFacilityReferralsController.get_all_facility_to_facility_referrals();
	      
		   
		   myFacilityToFacilityReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_facility_to_facility_referrals',urlencodedParser,function(request,response){
	   
	 var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    ReferralId:request.body.ReferralId,
			FacilityId:request.body.FacilityId,
			FacilityReferredTo:request.body.FacilityReferredTo,
			FacilityToFacilityReferralDate:date
		
      
        };
	
     
     var myFacilityToFacilityReferralsControllerObjectPromise = FacilityToFacilityReferralsController.batch_facility_to_facility_referrals_update(jsonObject_);
	   
		   
		   myFacilityToFacilityReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_facility_to_facility_referrals',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myFacilityToFacilityReferralsControllerObjectPromise = FacilityToFacilityReferralsController.get_specific_facility_to_facility_referrals(mKey,mValue);
	        
		   
		   myFacilityToFacilityReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_acility_to_facility_referrals',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	      var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		    ReferralId:request.body.ReferralId,
			FacilityId:request.body.FacilityId,
			FacilityReferredTo:request.body.FacilityReferredTo,
			FacilityToFacilityReferralDate:date
		
      
           };
	
                
                var myFacilityToFacilityReferralsControllerObjectPromise = FacilityToFacilityReferralsController.individual_facility_to_facility_referrals_update(column_name,value_,jsonObject_);
	         	        
		   
		   myFacilityToFacilityReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_facility_to_facility_referrals',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    
    var myFacilityToFacilityReferralsControllerObjectObjectPromise = FacilityToFacilityReferralsController.delete_back_referral_progress_information_record(column_name,value_);
	      	        
		   
		   myFacilityToFacilityReferralsControllerObjectObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




