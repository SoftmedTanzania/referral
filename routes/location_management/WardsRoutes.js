/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the wards table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"WardsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const WardsController = require('../../controllers/location_management/WardsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_wards', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    CouncilId:request.body.CouncilId,
			WardName:request.body.WardName,
			WardRefNo:request.body.WardRefNo
			
						   
		 
		
      
        };
	
	      var myWardsControllerObject=new WardsController();
          var myWardsControllerObjectPromise = myWardsControllerObject.insert_wards(jsonObject_);
	          
		   
		   myWardsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_wards',urlencodedParser,function(request,response){
    var myWardsControllerObject=new WardsController();
    var myWardsControllerObjectPromise = myWardsControllerObject.get_all_wards();
	      
		   
		   myWardsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_wards',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    CouncilId:request.body.CouncilId,
			WardName:request.body.WardName,
			WardRefNo:request.body.WardRefNo
		
      
        };
	
    var myWardsControllerObject=new WardsController();
    var myWardsControllerObjectPromise = myWardsControllerObject.batch_wards_update(jsonObject_);
	   
		   
		   myWardsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_wards',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myWardsControllerObject=new WardsController();


        var myWardsControllerObjectPromise = myWardsControllerObject.get_specific_wards(mKey,mValue);
	        
		   
		   myWardsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_wards',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		          CouncilId:request.body.CouncilId,
			      WardName:request.body.WardName,
			      WardRefNo:request.body.WardRefNo
		
      
           };
	
         var myWardsControllerObject=new WardsController();
         var myWardsControllerObjectPromise = myWardsControllerObject.individual_wards_update(column_name,value_,jsonObject_);
	         	        
		   
		   myWardsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_wards',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myWardsControllerObject=new WardsController();
    var myWardsControllerObjectPromise = myWardsControllerObject.delete_wards_record(column_name,value_);
	      	        
		   
		   myWardsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




