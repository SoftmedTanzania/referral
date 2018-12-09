/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the team_leads table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"TeamLeadsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const TeamLeadsController = require('../../controllers/team_management/TeamLeadsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_team_leads', urlencodedParser,function(request,response){
	   
	  var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    
			
			
			TeamLeadTypeId:request.body.TeamLeadTypeId,
			TeamId:request.body.TeamId,
			UserId:request.body.UserId,
			DateAdded:date
			
			
				
      
        };
	
	      var myTeamLeadsControllerObject=new TeamLeadsController();
          var myTeamLeadsControllerObjectPromise = myTeamLeadsControllerObject.insert_team_leads(jsonObject_);
	          
		   
		   myTeamLeadsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_team_leads',urlencodedParser,function(request,response){
    var myTeamLeadsControllerObject=new TeamLeadsController();
    var myTeamLeadsControllerObjectPromise = myTeamLeadsControllerObject.get_all_team_leads();
	      
		   
		   myTeamLeadsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_team_leads',urlencodedParser,function(request,response){
	   
	  var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    TeamLeadTypeId:request.body.TeamLeadTypeId,
			TeamId:request.body.TeamId,
			UserId:request.body.UserId,
			DateAdded:date
		
      
        };
	
     var myTeamLeadsControllerObject=new TeamLeadsController();
     var myTeamLeadsControllerObjectPromise = myTeamLeadsControllerObject.batch_team_leads_update(jsonObject_);
	   
		   
		   myTeamLeadsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_team_leads',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myTeamLeadsControllerObject=new TeamLeadsController();


        var myTeamLeadsControllerObjectPromise = myTeamLeadsControllerObject.get_specific_team_leads(mKey,mValue);
	        
		   
		   myTeamLeadsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_team_leads',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		         TeamLeadTypeId:request.body.TeamLeadTypeId,
			     TeamId:request.body.TeamId,
			     UserId:request.body.UserId,
			     DateAdded:date
		
      
           };
	
         var myTeamLeadsControllerObject=new TeamLeadsController();
         var myTeamLeadsControllerObjectPromise = myTeamLeadsControllerObject.individual_team_leads_update(column_name,value_,jsonObject_);
	         	        
		   
		   myTeamLeadsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_team_leads',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
   var myTeamLeadsControllerObject=new TeamLeadsController();
    var myTeamLeadsControllerObjectPromise = myTeamLeadsControllerObject.delete_team_leads_record(column_name,value_);
	      	        
		   
		   myTeamLeadsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




