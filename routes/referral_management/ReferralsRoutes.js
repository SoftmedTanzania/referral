/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the referrals table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ReferralsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const ReferralsController = require('../../controllers/referral_management/ReferralsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_referrals', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			
			UserId:request.body.UserId,
			ClientId:request.body.ClientId,
			FacilityId:request.body.FacilityId,
			ReferralServiceTypeId:request.body.ReferralServiceTypeId,
			EmergencrReferral:request.body.EmergencrReferral,
			AppointmentDate:request.body.AppointmentDate,
			ReferralStatus:request.body.ReferralStatus
			
			
			
      
        };
	
	      
          var myReferralsControllerObjectPromise = ReferralsController.insert_referrals(jsonObject_);
	          
		   
		   myReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_referrals',urlencodedParser,function(request,response){
    
    var myReferralsControllerObjectPromise = ReferralsController.get_all_referrals();
	      
		   
		   myReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_referrals',urlencodedParser,function(request,response){
	   
	 
	
    var	jsonObject_ = {
         
		    UserId:request.body.UserId,
			ClientId:request.body.ClientId,
			FacilityId:request.body.FacilityId,
			ReferralServiceTypeId:request.body.ReferralServiceTypeId,
			EmergencrReferral:request.body.EmergencrReferral,
			AppointmentDate:request.body.AppointmentDate,
			ReferralStatus:request.body.ReferralStatus
		
      
        };
	
     
     var myReferralsControllerObjectPromise = ReferralsController.batch_referrals_update(jsonObject_);
	   
		   
		   myReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_referrals',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myReferralsControllerObjectPromise = ReferralsController.get_specific_referrals(mKey,mValue);
	        
		   
		   myReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_referrals',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    UserId:request.body.UserId,
			ClientId:request.body.ClientId,
			FacilityId:request.body.FacilityId,
			ReferralServiceTypeId:request.body.ReferralServiceTypeId,
			EmergencrReferral:request.body.EmergencrReferral,
			AppointmentDate:request.body.AppointmentDate,
			ReferralStatus:request.body.ReferralStatus
		
		
      
           };
	
               
                var myReferralsControllerObjectPromise = ReferralsController.individual_referrals_update(column_name,value_,jsonObject_);
	         	        
		   
		   myReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_referrals',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
   
    var myReferralsControllerObjectPromise = ReferralsController.delete_referrals_record(column_name,value_);
	      	        
		   
		   myReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




