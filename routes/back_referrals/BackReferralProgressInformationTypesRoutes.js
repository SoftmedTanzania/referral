/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_progress_information_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"BackReferralProgressInformationTypesController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const BackReferralProgressInformationTypesController = require('../../controllers/back_referrals/BackReferralProgressInformationTypesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_back_referral_progress_information_types', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			
			
			
			BackReferralProgressInformationTypeDescription:request.body.BackReferralProgressInformationTypeDescription
			
			
			
      
        };
	
	      var myBackReferralProgressInformationTypesControllerObject=new BackReferralProgressInformationTypesController();
          var myBackReferralProgressInformationTypesControllerObjectPromise = myBackReferralProgressInformationTypesControllerObject.insert_back_referral_progress_information_types(jsonObject_);
	          
		   
		   myBackReferralProgressInformationTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_back_referral_progress_information_types',urlencodedParser,function(request,response){
    var myBackReferralProgressInformationTypesControllerObject=new BackReferralProgressInformationTypesController();
    var myBackReferralProgressInformationTypesControllerObjectPromise = myBackReferralProgressInformationTypesControllerObject.get_all_back_referral_progress_information_types();
	      
		   
		   myBackReferralProgressInformationTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_back_referral_progress_information_types',urlencodedParser,function(request,response){
	   
	 
	
    var	jsonObject_ = {
         
		    BackReferralProgressInformationTypeDescription:request.body.BackReferralProgressInformationTypeDescription
		
      
        };
	
     var myBackReferralProgressInformationTypesControllerObject=new BackReferralProgressInformationTypesController();
     var myBackReferralProgressInformationTypesControllerObjectPromise = myBackReferralProgressInformationTypesControllerObject.batch_back_referral_progress_information_types_update(jsonObject_);
	   
		   
		   myBackReferralProgressInformationTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_back_referral_progress_information_types',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myBackReferralProgressInformationTypesControllerObject=new BackReferralProgressInformationTypesController();


        var myBackReferralProgressInformationTypesControllerObjectPromise = myBackReferralProgressInformationTypesControllerObject.get_specific_back_referral_progress_information_types(mKey,mValue);
	        
		   
		   myBackReferralProgressInformationTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_back_referral_progress_information_types',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	      
	
          var	jsonObject_ = {
         
		    BackReferralProgressInformationTypeDescription:request.body.BackReferralProgressInformationTypeDescription
		
      
           };
	
                var myBackReferralProgressInformationTypesControllerObject=new BackReferralProgressInformationTypesController();
                var myBackReferralProgressInformationTypesControllerObjectPromise = myBackReferralProgressInformationTypesControllerObject.individual_back_referral_progress_information_types_update(column_name,value_,jsonObject_);
	         	        
		   
		   myBackReferralProgressInformationTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_back_referral_progress_information_types',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myBackReferralProgressInformationTypesControllerObject=new BackReferralProgressInformationTypesController();
    var myBackReferralProgressInformationTypesControllerObjectPromise = myBackReferralProgressInformationTypesControllerObject.delete_back_referral_progress_information_types_record(column_name,value_);
	      	        
		   
		   myBackReferralProgressInformationTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




