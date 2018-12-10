/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the chw_jurisdiction_villages table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ChwJurisdictionVillagesController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const ChwJurisdictionVillagesController = require('../../controllers/chw_jurisdictions/ChwJurisdictionVillagesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_chw_jurisdiction_villages', urlencodedParser,function(request,response){
	   
	  var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			UserId:request.body.UserId,
			VillageId:request.body.VillageId,
			DateAssigned:date
			
			
				
      
        };
	
	      
          var myChwJurisdictionVillagesControllerObjectPromise = ChwJurisdictionVillagesController.insert_chw_jurisdiction_villages(jsonObject_);
	          
		   
		   myChwJurisdictionVillagesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_chw_jurisdiction_villages',urlencodedParser,function(request,response){
    
    var myChwJurisdictionVillagesControllerObjectPromise = ChwJurisdictionVillagesController.get_all_chw_jurisdiction_villages();
	      
		   
		   myChwJurisdictionVillagesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_chw_jurisdiction_villages',urlencodedParser,function(request,response){
	   
	  var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    UserId:request.body.UserId,
			VillageId:request.body.VillageId,
			DateAssigned:date
		
      
        };
	
     
     var myChwJurisdictionVillagesControllerObjectPromise = ChwJurisdictionVillagesController.batch_chw_jurisdiction_villages_update(jsonObject_);
	   
		   
		   myChwJurisdictionVillagesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_chw_jurisdiction_villages',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myChwJurisdictionVillagesControllerObjectPromise = ChwJurisdictionVillagesController.get_specific_chw_jurisdiction_villages(mKey,mValue);
	        
		   
		   myChwJurisdictionVillagesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_chw_jurisdiction_villages',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         UserId:request.body.UserId,
			     VillageId:request.body.VillageId,
			     DateAssigned:date
		
      
           };
	
         
         var myChwJurisdictionVillagesControllerObjectPromise = ChwJurisdictionVillagesController.individual_chw_jurisdiction_villages_update(column_name,value_,jsonObject_);
	         	        
		   
		   myChwJurisdictionVillagesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_chw_jurisdiction_villages',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
   
    var myChwJurisdictionVillagesControllerObjectPromise = ChwJurisdictionVillagesController.delete_chw_jurisdiction_villages_record(column_name,value_);
	      	        
		   
		   myChwJurisdictionVillagesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




