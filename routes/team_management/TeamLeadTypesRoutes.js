/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the team_lead_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"TeamLeadTypesController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const TeamLeadTypesController = require('../../controllers/team_management/TeamLeadTypesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_team_lead_types', urlencodedParser,function(request,response){
	   
	  
	   
        var	jsonObject_ = {
         
		    
			
			
			TeamLeadTypeDescription:request.body.TeamLeadTypeDescription
			
			
						   
		 
		
      
        };
	
	      var myTeamLeadTypesControllerObject=new TeamLeadTypesController();
          var TeamLeadTypesControllerPromise = myTeamLeadTypesControllerObject.insert_team_lead_types(jsonObject_);
	          
		   
		   TeamLeadTypesControllerPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_team_lead_types',urlencodedParser,function(request,response){
    var myTeamLeadTypesControllerObject=new TeamLeadTypesController();
    var myTeamLeadTypesControllerObjectPromise = myTeamLeadTypesControllerObject.get_all_team_lead_types();
	      
		   
		   myTeamLeadTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_team_lead_types',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    TeamLeadTypeDescription:request.body.TeamLeadTypeDescription
		
      
        };
	
     var myTeamLeadTypesControllerObject=new TeamLeadTypesController();
     var myTeamLeadTypesControllerObjectPromise = myTeamLeadTypesControllerObject.batch_team_lead_types_update(jsonObject_);
	   
		   
		   myTeamLeadTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_team_lead_types',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
         var myTeamLeadTypesControllerObject=new TeamLeadTypesController();


        var myTeamLeadTypesControllerObjectPromise = myTeamLeadTypesControllerObject.get_specific_team_lead_types(mKey,mValue);
	        
		   
		   myTeamLeadTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_team_lead_types',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         TeamLeadTypeDescription:request.body.TeamLeadTypeDescription
		
      
           };
	
         var myTeamLeadTypesControllerObject=new TeamLeadTypesController();
         var myTeamLeadTypesControllerObjectPromise = myTeamLeadTypesControllerObject.individual_team_lead_types_update(column_name,value_,jsonObject_);
	         	        
		   
		   myTeamLeadTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_team_lead_types',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myTeamLeadTypesControllerObject=new TeamLeadTypesController();
    var myTeamLeadTypesControllerObjectPromise = myTeamLeadTypesControllerObject.delete_team_lead_types_record(column_name,value_);
	      	        
		   
		   myTeamLeadTypesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




