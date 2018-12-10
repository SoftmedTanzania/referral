/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the client_encounters's controller class.
It receives calls from the "ClientEncountersRoutes" class and
passes the calls down to the "ClientEncountersModel" class

*/



const ClientEncountersModel = require('../../models/client_management/ClientEncountersModel.js');




module.exports = class ClientEncountersController{
    constructor(){

    }
	
	
	
   static insert_client_encounters(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myClientEncountersModelObjectPromise = ClientEncountersModel.insert_client_encounters(jsonObject_);
		  
		   
		   myClientEncountersModelObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_client_encounters(){
	   return new Promise(function(resolve, reject) {  
        
        var myClientEncountersModelObjectPromise = ClientEncountersModel.get_all_client_encounters();
		   
		   
		   myClientEncountersModelObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_client_encounters(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myClientEncountersModelObjectPromise = ClientEncountersModel.get_specific_client_encounters(ColumnName,value_);
		   
		   
		   myClientEncountersModelObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_client_encounters_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myClientEncountersModelObjectPromise = ClientEncountersModel.batch_client_encounters_update(jsonObject_);
		   
		   
		   myClientEncountersModelObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_client_encounters_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myClientEncountersModelObjectPromise = ClientEncountersModel.individual_client_encounters_update(ColumnName,value_,jsonObject_);
		   
		   
		   myClientEncountersModelObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_client_encounters_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myClientEncountersModelObjectPromise = ClientEncountersModel.delete_client_encounters_record(ColumnName,value_);
		    
		   
		   myClientEncountersModelObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}