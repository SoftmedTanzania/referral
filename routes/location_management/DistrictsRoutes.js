/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the districts table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"DistrictsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const DistrictsController = require('../../controllers/location_management/DistrictsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_districts', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    RegionId:request.body.RegionId,
			DistrictName:request.body.DistrictName,
			DistrictRefNo:request.body.DistrictRefNo
			
						   
		 
		
      
        };
	
	      
          var myDistrictsControllerObjectPromise = DistrictsController.insert_districts(jsonObject_);
	          
		   
		   myDistrictsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_districts',urlencodedParser,function(request,response){
    
    var myDistrictsControllerObjectPromise = DistrictsController.get_all_districts();
	      
		   
		   myDistrictsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_districts',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    RegionId:request.body.RegionId,
			DistrictName:request.body.DistrictName,
			DistrictRefNo:request.body.DistrictRefNo
		
      
        };
	
    
    var myDistrictsControllerObjectPromise = DistrictsController.batch_districts_update(jsonObject_);
	   
		   
		   myDistrictsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_districts',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myDistrictsControllerObjectPromise = DistrictsController.get_specific_districts(mKey,mValue);
	        
		   
		   myDistrictsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_districts',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		          RegionId:request.body.RegionId,
			      DistrictName:request.body.DistrictName,
			      DistrictRefNo:request.body.DistrictRefNo
		
      
           };
	
         
         var myDistrictsControllerObjectPromise = DistrictsController.individual_districts_update(column_name,value_,jsonObject_);
	         	        
		   
		   myDistrictsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_districts',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    
    var myDistrictsControllerObjectPromise = DistrictsController.delete_districts_record(column_name,value_);
	      	        
		   
		   myDistrictsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




