/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the regions table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"RegionsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const RegionsController = require('../../controllers/location_management/RegionsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_regions', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    RegionName:request.body.RegionName,
			RegionRefNo:request.body.RegionRefNo
			
						   
		 
		
      
        };
	
	      var myRegionsControllerObject=new RegionsController();
          var myRegionsControllerObjectPromise = myRegionsControllerObject.insert_regions(jsonObject_);
	          
		   
		   myRegionsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_regions',urlencodedParser,function(request,response){
    var myRegionsControllerObject=new RegionsController();
    var myRegionsControllerObjectPromise = myRegionsControllerObject.get_all_regions();
	      
		   
		   myRegionsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_regions',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    RegionName:request.body.RegionName,
			RegionRefNo:request.body.RegionRefNo
		
      
        };
	
    var myRegionsControllerObject=new RegionsController();
    var myRegionsControllerObjectPromise = myRegionsControllerObject.batch_regions_update(jsonObject_);
	   
		   
		   myRegionsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_regions',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myRegionsControllerObject=new RegionsController();


        var myRegionsControllerObjectPromise = myRegionsControllerObject.get_specific_regions(mKey,mValue);
	        
		   
		   myRegionsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_regions',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		          RegionName:request.body.RegionName,
			      RegionRefNo:request.body.RegionRefNo
		
      
           };
	
         var myRegionsControllerObject=new RegionsController();
         var myRegionsControllerObjectPromise = myRegionsControllerObject.individual_regions_update(column_name,value_,jsonObject_);
	         	        
		   
		   myRegionsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_regions',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myRegionsControllerObject=new RegionsController();
    var myRegionsControllerObjectPromise = myRegionsControllerObject.delete_regions_record(column_name,value_);
	      	        
		   
		   myRegionsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




