/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the roles table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"RolesController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const RolesController = require('../../controllers/users_management/RolesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_roles', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			RoleDescription:request.body.RoleDescription
			
						   
		 
		
      
        };
	
	      
          var myRolesControllerObjectPromise = RolesController.insert_roles(jsonObject_);
	          
		   
		   myRolesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_roles',urlencodedParser,function(request,response){
    
    var myRolesControllerObjectPromise = RolesController.get_all_roles();
	      
		   
		   myRolesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_roles',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    RoleDescription:request.body.RoleDescription
		
      
        };
	
     
     var myRolesControllerObjectPromise = RolesController.batch_roles_update(jsonObject_);
	   
		   
		   myRolesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_roles',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
         


        var myRolesControllerObjectPromise = RolesController.get_specific_roles(mKey,mValue);
	        
		   
		   myRolesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_roles',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         RoleDescription:request.body.RoleDescription
		
      
           };
	
         
         var myRolesControllerObjectPromise = RolesController.individual_roles_update(column_name,value_,jsonObject_);
	         	        
		   
		   myRolesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_roles',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    
    var myRolesControllerObjectPromise = RolesController.delete_roles_record(column_name,value_);
	      	        
		   
		   myRolesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




