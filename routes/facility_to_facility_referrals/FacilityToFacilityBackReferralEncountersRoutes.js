/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facility_to_facility_back_referral_encounters table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"FacilityToFacilityBackReferralEncountersController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const FacilityToFacilityBackReferralEncountersController = require('../../controllers/facility_to_facility_referrals/FacilityToFacilityBackReferralEncountersController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_facility_to_facility_back_referral_encounters', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			
			
			
			FacilityToFacilityReferralId:request.body.FacilityToFacilityReferralId,
			BackReferralEncounterId:request.body.BackReferralEncounterId
			
			
			
			
      
        };
	
	      
          var myFacilityToFacilityBackReferralEncountersControllerObjectPromise = FacilityToFacilityBackReferralEncountersController.insert_facility_to_facility_back_referral_encounters(jsonObject_);
	          
		   
		   myFacilityToFacilityBackReferralEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_facility_to_facility_back_referral_encounters',urlencodedParser,function(request,response){
    
    var myFacilityToFacilityBackReferralEncountersControllerObjectPromise = FacilityToFacilityBackReferralEncountersController.get_all_facility_to_facility_back_referral_encounters();
	      
		   
		   myFacilityToFacilityBackReferralEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_facility_to_facility_back_referral_encounters',urlencodedParser,function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    FacilityToFacilityReferralId:request.body.FacilityToFacilityReferralId,
			BackReferralEncounterId:request.body.BackReferralEncounterId
		
      
        };
	
      
      var myFacilityToFacilityBackReferralEncountersControllerObjectPromise = FacilityToFacilityBackReferralEncountersController.batch_facility_to_facility_back_referral_encounters_update(jsonObject_);
	   
		   
		   myFacilityToFacilityBackReferralEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_facility_to_facility_back_referral_encounters',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myFacilityToFacilityBackReferralEncountersControllerObjectPromise = FacilityToFacilityBackReferralEncountersController.get_specific_facility_to_facility_back_referral_encounters(mKey,mValue);
	        
		   
		   myFacilityToFacilityBackReferralEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_facility_to_facility_back_referral_encounters',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	      
	
          var	jsonObject_ = {
         
		    FacilityToFacilityReferralId:request.body.FacilityToFacilityReferralId,
			BackReferralEncounterId:request.body.BackReferralEncounterId
		
      
           };
	
                
                var myFacilityToFacilityBackReferralEncountersControllerObjectPromise = FacilityToFacilityBackReferralEncountersController.individual_facility_to_facility_back_referral_encounters_update(column_name,value_,jsonObject_);
	         	        
		   
		   myFacilityToFacilityBackReferralEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_facility_to_facility_back_referral_encounters',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    
    var myFacilityToFacilityBackReferralEncountersControllerObjectPromise = FacilityToFacilityBackReferralEncountersController.delete_facility_to_facility_back_referral_encounters_record(column_name,value_);
	      	        
		   
		   myFacilityToFacilityBackReferralEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




