/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the teams table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"TeamsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const TeamsController = require('../../controllers/team_management/TeamsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_teams', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			TeamName:request.body.TeamName,
			TeamDescription:request.body.TeamDescription,
			TeamRefNo:request.body.TeamRefNo
			
						   
		 
		
      
        };
	
	      
          var myTeamsControllerObjectPromise = TeamsController.insert_teams(jsonObject_);
	          
		   
		   myTeamsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_teams',urlencodedParser,function(request,response){
    
    var myTeamsControllerObjectPromise = TeamsController.get_all_teams();
	      
		   
		   myTeamsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_teams',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    TeamName:request.body.TeamName,
			TeamDescription:request.body.TeamDescription,
			TeamRefNo:request.body.TeamRefNo
		
      
        };
	
     
     var myTeamsControllerObjectPromise = TeamsController.batch_teams_update(jsonObject_);
	   
		   
		   myTeamsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_teams',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
         


        var myTeamsControllerObjectPromise = TeamsController.get_specific_teams(mKey,mValue);
	        
		   
		   myTeamsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_teams',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         TeamName:request.body.TeamName,
			     TeamDescription:request.body.TeamDescription,
			     TeamRefNo:request.body.TeamRefNo
		
      
           };
	
         
         var myTeamsControllerObjectPromise = TeamsController.individual_teams_update(column_name,value_,jsonObject_);
	         	        
		   
		   myTeamsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_teams',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    
    var myTeamsControllerObjectPromise = TeamsController.delete_teams_record(column_name,value_);
	      	        
		   
		   myTeamsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




