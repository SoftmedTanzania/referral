/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the villages table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"VillagesController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const VillagesController = require('../../controllers/location_management/VillagesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_villages', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    WardId:request.body.WardId,
			VillageName:request.body.VillageName,
			VillageRefNo:request.body.VillageRefNo
			
						   
		 
		
      
        };
	
	      
          var myVillagesControllerObjectPromise = VillagesController.insert_villages(jsonObject_);
	          
		   
		   myVillagesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_villages',urlencodedParser,function(request,response){
    
    var myVillagesControllerObjectPromise = VillagesController.get_all_villages();
	      
		   
		   myVillagesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_villages',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    WardId:request.body.WardId,
			VillageName:request.body.VillageName,
			VillageRefNo:request.body.VillageRefNo
		
      
        };
	
    
    var myVillagesControllerObjectPromise = VillagesController.batch_villages_update(jsonObject_);
	   
		   
		   myVillagesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_villages',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myVillagesControllerObjectPromise = VillagesController.get_specific_villages(mKey,mValue);
	        
		   
		   myVillagesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_villages',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         WardId:request.body.WardId,
			     VillageName:request.body.VillageName,
			     VillageRefNo:request.body.VillageRefNo
		
      
           };
	
         
         var myVillagesControllerObjectPromise = VillagesController.individual_villages_update(column_name,value_,jsonObject_);
	         	        
		   
		   myVillagesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_villages',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    
    var myVillagesControllerObjectPromise = VillagesController.delete_villages_record(column_name,value_);
	      	        
		   
		   myVillagesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




