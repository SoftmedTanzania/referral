/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the teams's controller class.
It receives calls from the "TeamsRoutes" class and
passes the calls down to the "TeamsModel" class

*/



const TeamsModel = require('../../models/team_management/TeamsModel.js');




module.exports = class TeamsController{
    constructor(){

    }
	
	
	
   insert_teams(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myTeamsObject=new TeamsModel();
     var myTeamsObjectPromise = myTeamsObject.insert_teams(jsonObject_);
		  
		   
		   myTeamsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_teams(){
	   return new Promise(function(resolve, reject) {  
       const  myTeamsObject=new TeamsModel();
        var myTeamsObjectPromise = myTeamsObject.get_all_teams();
		   
		   
		   myTeamsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_teams(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        const  myTeamsObject=new TeamsModel();
        var myTeamsObjectPromise = myTeamsObject.get_specific_teams(ColumnName,value_);
		   
		   
		   myTeamsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_teams_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myTeamsObject=new TeamsModel();
        
		var myTeamsObjectPromise = myTeamsObject.batch_teams_update(jsonObject_);
		   
		   
		   myTeamsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_teams_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myTeamsObject=new TeamsModel();
        
		var myTeamsObjectPromise = myTeamsObject.individual_teams_update(ColumnName,value_);
		   
		   
		   myTeamsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_teams_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myTeamsObject=new TeamsModel();
        
		var myTeamsObjectPromise = myTeamsObject.delete_teams_record(ColumnName,value_);
		    
		   
		   myTeamsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}