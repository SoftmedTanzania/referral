/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the chw_jurisdiction_facilities table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ChwJurisdictionFacilitiesController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const ChwJurisdictionFacilitiesController = require('../../controllers/chw_jurisdictions/ChwJurisdictionFacilitiesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_chw_jurisdiction_facilities', urlencodedParser,function(request,response){
	   
	  var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			UserId:request.body.UserId,
			FacilityId:request.body.FacilityId,
			AssignedDate:date
			
			
				
      
        };
	
	     
          var myChwJurisdictionFacilitiesControllerObjectPromise = ChwJurisdictionFacilitiesController.insert_chw_jurisdiction_facilities(jsonObject_);
	          
		   
		   myChwJurisdictionFacilitiesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_chw_jurisdiction_facilities',urlencodedParser,function(request,response){
    
    var myChwJurisdictionFacilitiesControllerObjectPromise = ChwJurisdictionFacilitiesController.get_all_chw_jurisdiction_facilities();
	      
		   
		   myChwJurisdictionFacilitiesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_chw_jurisdiction_facilities',urlencodedParser,function(request,response){
	   
	  var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    UserId:request.body.UserId,
			FacilityId:request.body.FacilityId,
			AssignedDate:date
		
      
        };
	
     
     var myChwJurisdictionFacilitiesControllerObjectPromise = ChwJurisdictionFacilitiesController.batch_chw_jurisdiction_facilities_update(jsonObject_);
	   
		   
		   myChwJurisdictionFacilitiesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_chw_jurisdiction_facilities',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myChwJurisdictionFacilitiesControllerObjectObjectPromise = ChwJurisdictionFacilitiesController.get_specific_chw_jurisdiction_facilities(mKey,mValue);
	        
		   
		   myChwJurisdictionFacilitiesControllerObjectObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_chw_jurisdiction_facilities',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         UserId:request.body.UserId,
			     FacilityId:request.body.FacilityId,
			     AssignedDate:date
		
      
           };
	
         
         var myChwJurisdictionFacilitiesControllerObjectPromise = ChwJurisdictionFacilitiesController.individual_chw_jurisdiction_facilities_update(column_name,value_,jsonObject_);
	         	        
		   
		   myChwJurisdictionFacilitiesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_chw_jurisdiction_facilities',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
   
    var myChwJurisdictionFacilitiesControllerObjectPromise = ChwJurisdictionFacilitiesController.delete_chw_jurisdiction_facilities_record(column_name,value_);
	      	        
		   
		   myChwJurisdictionFacilitiesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




