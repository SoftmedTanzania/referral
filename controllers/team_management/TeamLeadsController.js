/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the team_leads's controller class.
It receives calls from the "TeamLeadsRoutes" class and
passes the calls down to the "TeamLeadsModel" class

*/



const TeamLeadsModel = require('../../models/team_management/TeamLeadsModel.js');




module.exports = class TeamLeadsController{
    constructor(){

    }
	
	
	
   static insert_team_leads(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myTeamLeadsObjectPromise = TeamLeadsModel.insert_team_leads(jsonObject_);
		  
		   
		   myTeamLeadsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_team_leads(){
	   return new Promise(function(resolve, reject) {  
       
        var myTeamLeadsObjectPromise = TeamLeadsModel.get_all_team_leads();
		   
		   
		   myTeamLeadsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_team_leads(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myTeamLeadsObjectPromise = TeamLeadsModel.get_specific_team_leads(ColumnName,value_);
		   
		   
		   myTeamLeadsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_team_leads_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myTeamLeadsObjectPromise = TeamLeadsModel.batch_team_leads_update(jsonObject_);
		   
		   
		   myTeamLeadsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_team_leads_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myTeamLeadsObjectPromise = TeamLeadsModel.individual_team_leads_update(ColumnName,value_,jsonObject_);
		   
		   
		   myTeamLeadsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_team_leads_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myTeamLeadsObjectPromise = TeamLeadsModel.delete_team_leads_record(ColumnName,value_);
		    
		   
		   myTeamLeadsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}