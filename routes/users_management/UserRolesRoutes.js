/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the user_roles table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"UserRolesController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const UserRolesController = require('../../controllers/users_management/UserRolesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_user_roles', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			UserId:request.body.UserId,
			RoleId:request.body.RoleId
			
						   
		 
		
      
        };
	
	      var myUserRolesControllerObject=new UserRolesController();
          var myUserRolesControllerObjectPromise = myUserRolesControllerObject.insert_user_roles(jsonObject_);
	          
		   
		   myUserRolesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_user_roles',urlencodedParser,function(request,response){
    var myUserRolesControllerObject=new UserRolesController();
    var myUserRolesControllerObjectPromise = myUserRolesControllerObject.get_all_user_roles();
	      
		   
		   myUserRolesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_user_roles',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    UserId:request.body.UserId,
			RoleId:request.body.RoleId
		
      
        };
	
     var myUserRolesControllerObject=new UserRolesController();
     var myUserRolesControllerObjectPromise = myUserRolesControllerObject.batch_user_roles_update(jsonObject_);
	   
		   
		   myUserRolesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_user_roles',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
         var myUserRolesControllerObject=new UserRolesController();


        var myUserRolesControllerObjectPromise = myUserRolesControllerObject.get_specific_user_roles(mKey,mValue);
	        
		   
		   myUserRolesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_user_roles',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         UserId:request.body.UserId,
			     RoleId:request.body.RoleId
		
      
           };
	
         var myUserRolesControllerObject=new UserRolesController();
         var myUserRolesControllerObjectPromise = myUserRolesControllerObject.individual_user_roles_update(column_name,value_,jsonObject_);
	         	        
		   
		   myUserRolesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_user_roles',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myUserRolesControllerObject=new UserRolesController();
    var myUserRolesControllerObjectPromise = myUserRolesControllerObject.delete_user_roles_record(column_name,value_);
	      	        
		   
		   myUserRolesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




