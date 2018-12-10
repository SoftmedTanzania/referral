/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the team_members table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"TeamMembersController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const TeamMembersController = require('../../controllers/team_management/TeamMembersController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_team_members', urlencodedParser,function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			UserId:request.body.UserId,
			TeamId:request.body.TeamId,
			DateAdded:date
			
						   
		 
		
      
        };
	
	      
          var myTeamMembersControllerObjectPromise = TeamMembersController.insert_team_members(jsonObject_);
	          
		   
		   myTeamMembersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_team_members',urlencodedParser,function(request,response){
    
    var myTeamMembersControllerObjectPromise = TeamMembersController.get_all_team_members();
	      
		   
		   myTeamMembersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_team_members',urlencodedParser,function(request,response){
	   
	  var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    UserId:request.body.UserId,
			TeamId:request.body.TeamId,
			DateAdded:date
		
      
        };
	
     
     var myTeamMembersControllerObjectPromise = TeamMembersController.batch_team_members_update(jsonObject_);
	   
		   
		   myTeamMembersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_team_members',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
         


        var myTeamMembersControllerObjectPromise = TeamMembersController.get_specific_team_members(mKey,mValue);
	        
		   
		   myTeamMembersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_team_members',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		         UserId:request.body.UserId,
			     TeamId:request.body.TeamId,
			     DateAdded:date
		
      
           };
	
         
         var myTeamMembersControllerObjectPromise = TeamMembersController.individual_team_members_update(column_name,value_,jsonObject_);
	         	        
		   
		   myTeamMembersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_team_members',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    
    var myTeamMembersControllerObjectPromise = TeamMembersController.delete_teams_record(column_name,value_);
	      	        
		   
		   myTeamMembersControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




