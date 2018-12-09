/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the team_lead_types's controller class.
It receives calls from the "TeamLeadTypesRoutes" class and
passes the calls down to the "TeamLeadTypesModel" class

*/



const TeamLeadTypesModel = require('../../models/team_management/TeamLeadTypesModel.js');




module.exports = class TeamLeadTypesController{
    constructor(){

    }
	
	
	
   insert_team_lead_types(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myTeamLeadTypesObject=new TeamLeadTypesModel();
     var myTeamLeadTypesObjectPromise = myTeamLeadTypesObject.insert_team_lead_types(jsonObject_);
		  
		   
		   myTeamLeadTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_team_lead_types(){
	   return new Promise(function(resolve, reject) {  
       const  myTeamLeadTypesObject=new TeamLeadTypesModel();
        var myTeamLeadTypesObjectPromise = myTeamLeadTypesObject.get_all_team_lead_types();
		   
		   
		   myTeamLeadTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_team_lead_types(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        const  myTeamLeadTypesObject=new TeamLeadTypesModel();
        var myTeamLeadTypesObjectPromise = myTeamLeadTypesObject.get_specific_team_lead_types(ColumnName,value_);
		   
		   
		   myTeamLeadTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_team_lead_types_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myTeamLeadTypesObject=new TeamLeadTypesModel();
        
		var myTeamLeadTypesObjectPromise = myTeamLeadTypesObject.batch_team_lead_types_update(jsonObject_);
		   
		   
		   myTeamLeadTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_team_lead_types_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myTeamLeadTypesObject=new TeamLeadTypesModel();
        
		var myTeamLeadTypesObjectPromise = myTeamLeadTypesObject.individual_team_lead_types_update(ColumnName,value_);
		   
		   
		   myTeamLeadTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_team_lead_types_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myTeamLeadTypesObject=new TeamLeadTypesModel();
        
		var myTeamLeadTypesObjectPromise = myTeamLeadTypesObject.delete_team_lead_types_record(ColumnName,value_);
		    
		   
		   myTeamLeadTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}