/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the team_members's controller class.
It receives calls from the "TeamMembersRoutes" class and
passes the calls down to the "TeamMembersModel" class

*/



const TeamMembersModel = require('../../models/team_management/TeamMembersModel.js');




module.exports = class TeamMembersController{
    constructor(){

    }
	
	
	
   static insert_team_members(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myTeamMembersObjectPromise = TeamMembersModel.insert_team_members(jsonObject_);
		  
		   
		   myTeamMembersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_team_members(){
	   return new Promise(function(resolve, reject) {  
      
        var myTeamMembersObjectPromise = TeamMembersModel.get_all_team_members();
		   
		   
		   myTeamMembersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_team_members(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myTeamMembersObjectPromise = TeamMembersModel.get_specific_team_members(ColumnName,value_);
		   
		   
		   myTeamMembersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_team_members_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myTeamMembersObjectPromise = TeamMembersModel.batch_team_members_update(jsonObject_);
		   
		   
		   myTeamMembersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_team_members_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myTeamMembersObjectPromise = TeamMembersModel.individual_team_members_update(ColumnName,value_,jsonObject_);
		   
		   
		   myTeamMembersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_team_members_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myTeamMembersObjectPromise = TeamMembersModel.delete_team_members_record(ColumnName,value_);
		    
		   
		   myTeamMembersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}