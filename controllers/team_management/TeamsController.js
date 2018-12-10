/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the teams's controller class.
It receives calls from the "TeamsRoutes" class and
passes the calls down to the "TeamsModel" class

*/



const TeamsModel = require('../../models/team_management/TeamsModel.js');




module.exports = class TeamsController{
    constructor(){

    }
	
	
	
   static insert_teams(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myTeamsObjectPromise = TeamsModel.insert_teams(jsonObject_);
		  
		   
		   myTeamsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_teams(){
	   return new Promise(function(resolve, reject) {  
      
        var myTeamsObjectPromise = TeamsModel.get_all_teams();
		   
		   
		   myTeamsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_teams(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myTeamsObjectPromise = TeamsModel.get_specific_teams(ColumnName,value_);
		   
		   
		   myTeamsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_teams_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myTeamsObjectPromise = TeamsModel.batch_teams_update(jsonObject_);
		   
		   
		   myTeamsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_teams_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myTeamsObjectPromise = TeamsModel.individual_teams_update(ColumnName,value_,jsonObject_);
		   
		   
		   myTeamsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_teams_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myTeamsObjectPromise = TeamsModel.delete_teams_record(ColumnName,value_);
		    
		   
		   myTeamsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}