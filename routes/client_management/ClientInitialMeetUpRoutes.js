/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the client_initial_meetup table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ClientInitialMeetUpController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const ClientInitialMeetUpController = require('../../controllers/client_management/ClientInitialMeetUpController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_client_initial_meetup', urlencodedParser,function(request,response){
	   
	  var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			
			UserId:request.body.UserId,
			ClientId:request.body.ClientId,
			VillageId:request.body.VillageId,
			InitialMeetUpDate:date,
			PhysicalAddress:request.body.PhysicalAddress,
			VeoPresent:request.body.VeoPresent
			
			
			
				
      
        };
	
	      var myClientInitialMeetUpControllerObject=new ClientInitialMeetUpController();
          var myClientInitialMeetUpControllerObjectPromise = myClientInitialMeetUpControllerObject.insert_client_initial_meetup(jsonObject_);
	          
		   
		   myClientInitialMeetUpControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_client_initial_meetup',urlencodedParser,function(request,response){
    var myClientInitialMeetUpControllerObject=new ClientInitialMeetUpController();
    var myClientInitialMeetUpControllerObjectPromise = myClientInitialMeetUpControllerObject.get_all_client_initial_meetup();
	      
		   
		   myClientInitialMeetUpControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_client_initial_meetup',urlencodedParser,function(request,response){
	   
	  var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    UserId:request.body.UserId,
			ClientId:request.body.ClientId,
			VillageId:request.body.VillageId,
			InitialMeetUpDate:date,
			PhysicalAddress:request.body.PhysicalAddress,
			VeoPresent:request.body.VeoPresent
		
      
        };
	
     var myClientInitialMeetUpControllerObject=new ClientInitialMeetUpController();
     var myClientInitialMeetUpControllerObjectPromise = myClientInitialMeetUpControllerObject.batch_client_initial_meetup_update(jsonObject_);
	   
		   
		   myClientInitialMeetUpControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_client_initial_meetup',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myClientInitialMeetUpControllerObject=new ClientInitialMeetUpController();


        var myClientInitialMeetUpControllerObjectPromise = myClientInitialMeetUpControllerObject.get_specific_client_initial_meetup(mKey,mValue);
	        
		   
		   myClientInitialMeetUpControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_client_initial_meetup',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		    UserId:request.body.UserId,
			ClientId:request.body.ClientId,
			VillageId:request.body.VillageId,
			InitialMeetUpDate:date,
			PhysicalAddress:request.body.PhysicalAddress,
			VeoPresent:request.body.VeoPresent
		
      
           };
	
                var myClientInitialMeetUpControllerObject=new ClientInitialMeetUpController();
                var myClientInitialMeetUpControllerObjectPromise = myClientInitialMeetUpControllerObject.individual_client_initial_meetup_update(column_name,value_,jsonObject_);
	         	        
		   
		   myClientInitialMeetUpControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_client_initial_meetup',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myClientInitialMeetUpControllerObject=new ClientInitialMeetUpController();
    var myClientInitialMeetUpControllerObjectPromise = myClientInitialMeetUpControllerObject.delete_client_initial_meetup_record(column_name,value_);
	      	        
		   
		   myClientInitialMeetUpControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




