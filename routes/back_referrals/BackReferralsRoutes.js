/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referrals table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"BackReferralsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const BackReferralsController = require('../../controllers/back_referrals/BackReferralsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_back_referrals', urlencodedParser,function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			ReferralId:request.body.ReferralId,
			BackReferralDate:date,
			FollowUpFlag:request.body.FollowUpFlag
			
			
			
      
        };
	
	      var myBackReferralsControllerObject=new BackReferralsController();
          var myBackReferralsControllerObjectPromise = myBackReferralsControllerObject.insert_back_referrals(jsonObject_);
	          
		   
		   myBackReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_back_referrals',urlencodedParser,function(request,response){
    var myBackReferralsControllerObject=new BackReferralsController();
    var myBackReferralsControllerObjectPromise = myBackReferralsControllerObject.get_all_back_referrals();
	      
		   
		   myBackReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_back_referrals',urlencodedParser,function(request,response){
	   
	 var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    ReferralId:request.body.ReferralId,
			BackReferralDate:date,
			FollowUpFlag:request.body.FollowUpFlag
		
      
        };
	
     var myBackReferralsControllerObject=new BackReferralsController();
     var myBackReferralsControllerObjectPromise = myBackReferralsControllerObject.batch_back_referrals_update(jsonObject_);
	   
		   
		   myBackReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_back_referrals',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myBackReferralsControllerObject=new BackReferralsController();


        var myBackReferralsControllerObjectPromise = myBackReferralsControllerObject.get_specific_back_referrals(mKey,mValue);
	        
		   
		   myBackReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_back_referrals',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	      var date = new Date();
	      date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		    ReferralId:request.body.ReferralId,
			BackReferralDate:date,
			FollowUpFlag:request.body.FollowUpFlag
		
		
      
           };
	
                var myBackReferralsControllerObject=new BackReferralsController();
                var myBackReferralsControllerObjectPromise = myBackReferralsControllerObject.individual_back_referrals_update(column_name,value_,jsonObject_);
	         	        
		   
		   myBackReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_back_referrals',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myBackReferralsControllerObject=new BackReferralsController();
    var myBackReferralsControllerObjectPromise = myBackReferralsControllerObject.delete_back_referrals_record(column_name,value_);
	      	        
		   
		   myBackReferralsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




