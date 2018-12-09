/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the team_members's controller class.
It receives calls from the "TeamMembersRoutes" class and
passes the calls down to the "TeamMembersModel" class

*/



const TeamMembersModel = require('../../models/team_management/TeamMembersModel.js');




module.exports = class TeamMembersController{
    constructor(){

    }
	
	
	
   insert_team_members(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myTeamMembersObject=new TeamMembersModel();
     var myTeamMembersObjectPromise = myTeamMembersObject.insert_team_members(jsonObject_);
		  
		   
		   myTeamMembersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_team_members(){
	   return new Promise(function(resolve, reject) {  
       const  myTeamMembersObject=new TeamMembersModel();
        var myTeamMembersObjectPromise = myTeamMembersObject.get_all_team_members();
		   
		   
		   myTeamMembersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_team_members(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        const  myTeamMembersObject=new TeamMembersModel();
        var myTeamMembersObjectPromise = myTeamMembersObject.get_specific_team_members(ColumnName,value_);
		   
		   
		   myTeamMembersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_team_members_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myTeamMembersObject=new TeamMembersModel();
        
		var myTeamMembersObjectPromise = myTeamMembersObject.batch_team_members_update(jsonObject_);
		   
		   
		   myTeamMembersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_team_members_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myTeamMembersObject=new TeamMembersModel();
        
		var myTeamMembersObjectPromise = myTeamMembersObject.individual_team_members_update(ColumnName,value_,jsonObject_);
		   
		   
		   myTeamMembersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_team_members_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myTeamMembersObject=new TeamMembersModel();
        
		var myTeamMembersObjectPromise = myTeamMembersObject.delete_team_members_record(ColumnName,value_);
		    
		   
		   myTeamMembersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}