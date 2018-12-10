/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the referral_danger_signs table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ReferralDangerSignsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const ReferralDangerSignsController = require('../../controllers/referral_management/ReferralDangerSignsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_referral_danger_signs', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			
			ReferralId:request.body.ReferralId,
			DangerSignId:request.body.DangerSignId
			
			
			
      
        };
	
	      
          var myReferralDangerSignsControllerObjectPromise = ReferralDangerSignsController.insert_referral_danger_signs(jsonObject_);
	          
		   
		   myReferralDangerSignsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_referral_danger_signs',urlencodedParser,function(request,response){
    
    var myReferralDangerSignsControllerObjectPromise = ReferralDangerSignsController.get_all_referral_danger_signs();
	      
		   
		   myReferralDangerSignsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_referral_danger_signs',urlencodedParser,function(request,response){
	   
	 
	
    var	jsonObject_ = {
         
		    ReferralId:request.body.ReferralId,
			DangerSignId:request.body.DangerSignId
		
      
        };
	
     
     var myReferralDangerSignsControllerObjectPromise = ReferralDangerSignsController.batch_referral_danger_signs_update(jsonObject_);
	   
		   
		   myReferralDangerSignsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_referral_danger_signs',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myReferralDangerSignsControllerObjectPromise = ReferralDangerSignsController.get_specific_referral_danger_signs(mKey,mValue);
	        
		   
		   myReferralDangerSignsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_referral_danger_signs',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    ReferralId:request.body.ReferralId,
			DangerSignId:request.body.DangerSignId
		
      
           };
	
                
                var myReferralDangerSignsControllerObjectPromise = ReferralDangerSignsController.individual_referral_danger_signs_update(column_name,value_,jsonObject_);
	         	        
		   
		   myDangerSignsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_referral_danger_signs',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
  
    var myReferralDangerSignsControllerObjectPromise = ReferralDangerSignsController.delete_referral_danger_signs_record(column_name,value_);
	      	        
		   
		   myReferralDangerSignsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




