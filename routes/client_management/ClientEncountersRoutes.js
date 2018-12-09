/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the client_encounters table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ClientEncountersController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const ClientEncountersController = require('../../controllers/client_management/ClientEncountersController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_client_encounters', urlencodedParser,function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			
			
			ClientInitialMeetUpId:request.body.ClientInitialMeetUpId,
			VillageId:request.body.VillageId,
			EncounterPhysicalAddress:request.body.EncounterPhysicalAddress,
			EncounterDate:date,
			VeoPresent:request.body.VeoPresent
			
			
			
				
      
        };
	
	      var myClientEncountersControllerObject=new ClientEncountersController();
          var myClientEncountersControllerObjectPromise = myClientEncountersControllerObject.insert_client_encounters(jsonObject_);
	          
		   
		   myClientEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_client_encounters',urlencodedParser,function(request,response){
    var myClientEncountersControllerObject=new ClientEncountersController();
    var myClientEncountersControllerObjectPromise = myClientEncountersControllerObject.get_all_client_encounters();
	      
		   
		   myClientEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_client_encounters',urlencodedParser,function(request,response){
	   
	  var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    ClientInitialMeetUpId:request.body.ClientInitialMeetUpId,
			VillageId:request.body.VillageId,
			EncounterPhysicalAddress:request.body.EncounterPhysicalAddress,
			EncounterDate:date,
			VeoPresent:request.body.VeoPresent
		
      
        };
	
     var myClientEncountersControllerObject=new ClientEncountersController();
     var myClientEncountersControllerObjectPromise = myClientEncountersControllerObject.batch_client_encounters_update(jsonObject_);
	   
		   
		   myClientEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_client_encounters',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myClientEncountersControllerObject=new ClientEncountersController();


        var myClientEncountersControllerObjectPromise = myClientEncountersControllerObject.get_specific_client_encounters(mKey,mValue);
	        
		   
		   myClientEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_client_encounters',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		    ClientInitialMeetUpId:request.body.ClientInitialMeetUpId,
			VillageId:request.body.VillageId,
			EncounterPhysicalAddress:request.body.EncounterPhysicalAddress,
			EncounterDate:date,
			VeoPresent:request.body.VeoPresent
		
      
           };
	
                var myClientEncountersControllerObject=new ClientEncountersController();
                var myClientEncountersControllerObjectPromise = myClientEncountersControllerObject.individual_client_encounters_update(column_name,value_,jsonObject_);
	         	        
		   
		   myClientEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_client_encounters',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
   var myClientEncountersControllerObject=new ClientEncountersController();
    var myClientEncountersControllerObjectPromise = myClientEncountersControllerObject.delete_client_encounters_record(column_name,value_);
	      	        
		   
		   myClientEncountersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




