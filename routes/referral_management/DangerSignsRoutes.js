/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the danger_signs table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"DangerSignsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const DangerSignsController = require('../../controllers/referral_management/DangerSignsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_danger_signs', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			
			ReferralServiceTypeId:request.body.ReferralServiceTypeId,
			DangerSignDescription:request.body.DangerSignDescription
			
			
			
      
        };
	
	      
          var myDangerSignsControllerObjectPromise = DangerSignsController.insert_danger_signs(jsonObject_);
	          
		   
		   myDangerSignsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_danger_signs',urlencodedParser,function(request,response){
    
    var myDangerSignsControllerObjectPromise = DangerSignsController.get_all_danger_signs();
	      
		   
		   myDangerSignsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_danger_signs',urlencodedParser,function(request,response){
	   
	 
	
    var	jsonObject_ = {
         
		    ReferralServiceTypeId:request.body.ReferralServiceTypeId,
			DangerSignDescription:request.body.DangerSignDescription
		
      
        };
	
     
     var myDangerSignsControllerObjectPromise = DangerSignsController.batch_danger_signs_update(jsonObject_);
	   
		   
		   myDangerSignsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_danger_signs',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myDangerSignsControllerObjectPromise = DangerSignsController.get_specific_danger_signs(mKey,mValue);
	        
		   
		   myDangerSignsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_danger_signs',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    ReferralServiceTypeId:request.body.ReferralServiceTypeId,
			DangerSignDescription:request.body.DangerSignDescription
		
      
           };
	
                
                var myDangerSignsControllerObjectPromise = DangerSignsController.individual_danger_signs_update(column_name,value_,jsonObject_);
	         	        
		   
		   myDangerSignsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_danger_signs',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
  
    var myDangerSignsControllerObjectPromise = DangerSignsController.delete_danger_signs_record(column_name,value_);
	      	        
		   
		   myDangerSignsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




