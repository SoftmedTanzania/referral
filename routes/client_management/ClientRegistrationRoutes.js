/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the client_registration table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ClientRegistrationController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const ClientRegistrationController = require('../../controllers/client_management/ClientRegistrationController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/client_registration', urlencodedParser,function(request,response){
	   
	  
	   
        var	jsonObject_ = {
         
		    
			
			
			UserId:request.body.UserId,
			FirstName:request.body.FirstName,
			MiddleName:request.body.MiddleName,
			SurName:request.body.SurName,
			PhoneNumber:request.body.PhoneNumber,
			Email:request.body.Email,
			PhysicalAddress:request.body.PhysicalAddress,
			DOB:request.body.DOB,
			Gender:request.body.Gender,
			VillageId:request.body.VillageId,
			VillageName:request.body.VillageName,
			WardId:request.body.WardId,
			WardName:request.body.WardName,
			VillageRefNo:request.body.VillageRefNo,
			WardRefNo:request.body.WardRefNo,
			IsAChildOf:request.body.IsAChildOf
			
			
			
				
      
        };
	
	      
          var myClientRegistrationControllerObjectPromise = ClientRegistrationController.insert_client_registration(jsonObject_);
	          
		   
		   myClientRegistrationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_client_registration',urlencodedParser,function(request,response){
    
    var myClientRegistrationControllerObjectPromise = ClientRegistrationController.get_all_client_registration();
	      
		   
		   myClientRegistrationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_client_registration',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    FirstName:request.body.FirstName,
			MiddleName:request.body.MiddleName,
			SurName:request.body.SurName,
			PhoneNumber:request.body.PhoneNumber,
			Email:request.body.Email,
			UniqueId:request.body.UniqueId,
			PhysicalAddress:request.body.PhysicalAddress,
			DOB:request.body.DOB,
			Gender:request.body.Gender,
			VillageId:request.body.VillageId,
			IsAChildOf:request.body.IsAChildOf
		
      
        };
	
     
     var myClientRegistrationControllerObjectPromise = ClientRegistrationController.batch_client_registration_update(jsonObject_);
	   
		   
		   myClientRegistrationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_client_registration',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        


        var myClientRegistrationControllerObjectPromise = ClientRegistrationController.get_specific_client_registration(mKey,mValue);
	        
		   
		   myClientRegistrationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_client_registration',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    FirstName:request.body.FirstName,
			MiddleName:request.body.MiddleName,
			SurName:request.body.SurName,
			PhoneNumber:request.body.PhoneNumber,
			Email:request.body.Email,
			UniqueId:request.body.UniqueId,
			PhysicalAddress:request.body.PhysicalAddress,
			DOB:request.body.DOB,
			Gender:request.body.Gender,
			VillageId:request.body.VillageId,
			IsAChildOf:request.body.IsAChildOf
		
      
           };
	
                
                var myClientRegistrationControllerObjectPromise = ClientRegistrationController.individual_client_registration_update(column_name,value_,jsonObject_);
	         	        
		   
		   myClientRegistrationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_client_registration',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
   
    var myClientRegistrationControllerObjectPromise = ClientRegistrationController.delete_client_registration_record(column_name,value_);
	      	        
		   
		   myClientRegistrationControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




