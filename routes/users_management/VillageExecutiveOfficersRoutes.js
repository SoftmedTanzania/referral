/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the village_executive_officers table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"VillageExecutiveOfficersController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const VillageExecutiveOfficersController = require('../../controllers/users_management/VillageExecutiveOfficersController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_village_executive_officers', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    VillageId:request.body.VillageId,
			FirstName:request.body.FirstName,
			MiddleName:request.body.MiddleName,
			SurName:request.body.SurName,
			PhoneNumber:request.body.PhoneNumber,
			Email:request.body.Email,
			PhysicalAddress:request.body.PhysicalAddress,
			DOB:request.body.DOB,
			Gender:request.body.Gender
			
						   
		 
		
      
        };
	
	      var myVillageExecutiveOfficersControllerObject=new VillageExecutiveOfficersController();
          var myVillageExecutiveOfficersControllerObjectPromise = myVillageExecutiveOfficersControllerObject.insert_village_executive_officers(jsonObject_);
	          
		   
		   myVillageExecutiveOfficersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_village_executive_officers',urlencodedParser,function(request,response){
    var myVillageExecutiveOfficersControllerObject=new VillageExecutiveOfficersController();
    var myVillageExecutiveOfficersControllerObjectPromise = myVillageExecutiveOfficersControllerObject.get_all_village_executive_officers();
	      
		   
		   myVillageExecutiveOfficersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_village_executive_officers',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    VillageId:request.body.VillageId,
			FirstName:request.body.FirstName,
			MiddleName:request.body.MiddleName,
			SurName:request.body.SurName,
			PhoneNumber:request.body.PhoneNumber,
			Email:request.body.Email,
			PhysicalAddress:request.body.PhysicalAddress,
			DOB:request.body.DOB,
			Gender:request.body.Gender
		
      
        };
	
     var myVillageExecutiveOfficersControllerObject=new VillageExecutiveOfficersController();
    var myVillageExecutiveOfficersControllerObjectPromise = myVillageExecutiveOfficersControllerObject.batch_village_executive_officers_update(jsonObject_);
	   
		   
		   myVillageExecutiveOfficersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_village_executive_officers',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myVillageExecutiveOfficersControllerObject=new VillageExecutiveOfficersController();


        var myVillageExecutiveOfficersControllerObjectPromise = myVillageExecutiveOfficersControllerObject.get_specific_village_executive_officers(mKey,mValue);
	        
		   
		   myVillageExecutiveOfficersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_village_executive_officers',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         VillageId:request.body.VillageId,
			     FirstName:request.body.FirstName,
			     MiddleName:request.body.MiddleName,
			     SurName:request.body.SurName,
			     PhoneNumber:request.body.PhoneNumber,
			     Email:request.body.Email,
			     PhysicalAddress:request.body.PhysicalAddress,
			     DOB:request.body.DOB,
			     Gender:request.body.Gender
		
      
           };
	
         var myVillageExecutiveOfficersControllerObject=new VillageExecutiveOfficersController();
         var myVillageExecutiveOfficersControllerObjectPromise = myVillageExecutiveOfficersControllerObject.individual_village_executive_officers_update(column_name,value_,jsonObject_);
	         	        
		   
		   myVillageExecutiveOfficersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_village_executive_officers',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myVillageExecutiveOfficersControllerObject=new VillageExecutiveOfficersController();
    var myVillageExecutiveOfficersControllerObjectPromise = myVillageExecutiveOfficersControllerObject.delete_village_executive_officers_record(column_name,value_);
	      	        
		   
		   myVillageExecutiveOfficersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




