/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_progress_information table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"BackReferralProgressInformationController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const BackReferralProgressInformationController = require('../../controllers/back_referrals/BackReferralProgressInformationController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_back_referral_progress_information', urlencodedParser,function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			
			BackReferralProgressInformationTypeId:request.body.BackReferralProgressInformationTypeId,
			BackReferralProgressInformationTypeId:request.body.BackReferralProgressInformationTypeId,
			BackReferralEncounterId:request.body.BackReferralEncounterId,
			RecordedBy:request.body.RecordedBy,
			RecordedDate:date
			
			
			
      
        };
	
	      var myBackReferralProgressInformationControllerObject=new BackReferralProgressInformationController();
          var myBackReferralProgressInformationControllerObjectPromise = myBackReferralProgressInformationControllerObject.insert_back_referral_progress_information(jsonObject_);
	          
		   
		   myBackReferralProgressInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_back_referral_progress_information',urlencodedParser,function(request,response){
    var myBackReferralProgressInformationControllerObject=new BackReferralProgressInformationController();
    var myBackReferralProgressInformationControllerObjectPromise = myBackReferralProgressInformationControllerObject.get_all_back_referral_progress_information();
	      
		   
		   myBackReferralProgressInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_back_referral_progress_information',urlencodedParser,function(request,response){
	   
	 var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    BackReferralProgressInformationTypeId:request.body.BackReferralProgressInformationTypeId,
			BackReferralProgressInformationTypeId:request.body.BackReferralProgressInformationTypeId,
			BackReferralEncounterId:request.body.BackReferralEncounterId,
			RecordedBy:request.body.RecordedBy,
			RecordedDate:date
		
      
        };
	
     var myBackReferralProgressInformationControllerObject=new BackReferralProgressInformationController();
     var myBackReferralProgressInformationControllerObjectPromise = myBackReferralProgressInformationControllerObject.batch_back_referral_progress_information_update(jsonObject_);
	   
		   
		   myBackReferralProgressInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_back_referral_progress_information',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myBackReferralProgressInformationControllerObject=new BackReferralProgressInformationController();


        var myBackReferralProgressInformationControllerObjectPromise = myBackReferralProgressInformationControllerObject.get_specific_back_referral_progress_information(mKey,mValue);
	        
		   
		   myBackReferralProgressInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_back_referral_progress_information',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	      var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		    BackReferralProgressInformationTypeId:request.body.BackReferralProgressInformationTypeId,
			BackReferralProgressInformationTypeId:request.body.BackReferralProgressInformationTypeId,
			BackReferralEncounterId:request.body.BackReferralEncounterId,
			RecordedBy:request.body.RecordedBy,
			RecordedDate:date
		
      
           };
	
                var myBackReferralProgressInformationControllerObject=new BackReferralProgressInformationController();
                var myBackReferralProgressInformationControllerObjectPromise = myBackReferralProgressInformationControllerObject.individual_back_referral_progress_information_update(column_name,value_,jsonObject_);
	         	        
		   
		   myBackReferralProgressInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_back_referral_progress_information',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myBackReferralProgressInformationControllerObject=new BackReferralProgressInformationController();
    var myBackReferralProgressInformationControllerObjectPromise = myBackReferralProgressInformationControllerObject.delete_back_referral_progress_information_record(column_name,value_);
	      	        
		   
		   myBackReferralProgressInformationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




