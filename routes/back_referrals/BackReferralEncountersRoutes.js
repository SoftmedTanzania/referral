/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_encounters table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"BackReferralEncountersController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const BackReferralEncountersController = require('../../controllers/back_referrals/BackReferralEncountersController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_back_referral_encounters', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			
			
			ClientEncounterId:request.body.ClientEncounterId,
			BackReferralId:request.body.BackReferralId
			
			
			
      
        };
	
	      var myBackReferralEncountersControllerObject=new BackReferralEncountersController();
          var myBackReferralEncountersControllerObjectPromise = myBackReferralEncountersControllerObject.insert_back_referral_encounters(jsonObject_);
	          
		   
		   myBackReferralEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_back_referral_encounters',urlencodedParser,function(request,response){
    var myBackReferralEncountersControllerObject=new BackReferralEncountersController();
    var myBackReferralEncountersControllerObjectPromise = myBackReferralEncountersControllerObject.get_all_back_referral_encounters();
	      
		   
		   myBackReferralEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_back_referral_encounters',urlencodedParser,function(request,response){
	   
	 
	
    var	jsonObject_ = {
         
		    ClientEncounterId:request.body.ClientEncounterId,
			BackReferralId:request.body.BackReferralId
		
      
        };
	
     var myBackReferralEncountersControllerObject=new BackReferralEncountersController();
     var myBackReferralEncountersControllerObjectPromise = myBackReferralEncountersControllerObject.batch_back_referral_encounters_update(jsonObject_);
	   
		   
		   myBackReferralEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_back_referral_encounters',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myBackReferralEncountersControllerObject=new BackReferralEncountersController();


        var myBackReferralEncountersControllerObjectPromise = myBackReferralEncountersControllerObject.get_specific_back_referral_encounters(mKey,mValue);
	        
		   
		   myBackReferralEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_back_referral_encounters',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	      
	
          var	jsonObject_ = {
         
		    ClientEncounterId:request.body.ClientEncounterId,
			BackReferralId:request.body.BackReferralId
		
      
           };
	
                var myBackReferralEncountersControllerObject=new BackReferralEncountersController();
                var myBackReferralEncountersControllerObjectPromise = myBackReferralEncountersControllerObject.individual_back_referral_encounters_update(column_name,value_,jsonObject_);
	         	        
		   
		   myBackReferralEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_back_referral_encounters',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myBackReferralEncountersControllerObject=new BackReferralEncountersController();
    var myBackReferralEncountersControllerObjectPromise = myBackReferralEncountersControllerObject.delete_back_referral_request_information_types_record(column_name,value_);
	      	        
		   
		   myBackReferralEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




