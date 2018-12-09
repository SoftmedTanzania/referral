/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the client_encounters's controller class.
It receives calls from the "ClientEncountersRoutes" class and
passes the calls down to the "ClientEncountersModel" class

*/



const ClientEncountersModel = require('../../models/client_management/ClientEncountersModel.js');




module.exports = class ClientEncountersController{
    constructor(){

    }
	
	
	
   insert_client_encounters(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myClientEncountersModelObject=new ClientEncountersModel();
     var myClientEncountersModelObjectPromise = myClientEncountersModelObject.insert_client_encounters(jsonObject_);
		  
		   
		   myClientEncountersModelObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_client_encounters(){
	   return new Promise(function(resolve, reject) {  
        const  myClientEncountersModelObject=new ClientEncountersModel();
        var myClientEncountersModelObjectPromise = myClientEncountersModelObject.get_all_client_encounters();
		   
		   
		   myClientEncountersModelObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_client_encounters(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myClientEncountersModelObject=new ClientEncountersModel();
        var myClientEncountersModelObjectPromise = myClientEncountersModelObject.get_specific_client_encounters(ColumnName,value_);
		   
		   
		   myClientEncountersModelObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_client_encounters_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myClientEncountersModelObject=new ClientEncountersModel();
        
		var myClientEncountersModelObjectPromise = myClientEncountersModelObject.batch_client_encounters_update(jsonObject_);
		   
		   
		   myClientEncountersModelObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_client_encounters_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myClientEncountersModelObject=new ClientEncountersModel();
        
		var myClientEncountersModelObjectPromise = myClientEncountersModelObject.individual_client_encounters_update(ColumnName,value_,jsonObject_);
		   
		   
		   myClientEncountersModelObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_client_encounters_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myClientEncountersModelObject=new ClientEncountersModel();
        
		var myClientEncountersModelObjectPromise = myClientEncountersModelObject.delete_client_encounters_record(ColumnName,value_);
		    
		   
		   myClientEncountersModelObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}