/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the districts table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"CouncilsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const CouncilsController = require('../../controllers/location_management/CouncilsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_councils', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    DistrictId:request.body.DistrictId,
			CouncilName:request.body.CouncilName,
			CouncilRefNo:request.body.CouncilRefNo
			
						   
		 
		
      
        };
	
	      
          var myCouncilsControllerObjectPromise = CouncilsController.insert_councils(jsonObject_);
	          
		   
		   myCouncilsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_councils',urlencodedParser,function(request,response){
    
    var myCouncilsControllerObjectPromise = CouncilsController.get_all_councils();
	      
		   
		   myCouncilsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_councils',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    DistrictId:request.body.DistrictId,
			CouncilName:request.body.CouncilName,
			CouncilRefNo:request.body.CouncilRefNo
		
      
        };
	
    
    var myCouncilsControllerObjectPromise = CouncilsController.batch_councils_update(jsonObject_);
	   
		   
		   myCouncilsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_councils',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myCouncilsControllerObjectPromise = CouncilsController.get_specific_councils(mKey,mValue);
	        
		   
		   myCouncilsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_councils',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		          DistrictId:request.body.DistrictId,
			      CouncilName:request.body.CouncilName,
			      CouncilRefNo:request.body.CouncilRefNo
		
      
           };
	
         
         var myCouncilsControllerObjectPromise = CouncilsController.individual_councils_update(column_name,value_,jsonObject_);
	         	        
		   
		   myCouncilsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_councils',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    
    var myCouncilsControllerObjectPromise = CouncilsController.delete_councils_record(column_name,value_);
	      	        
		   
		   myCouncilsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




