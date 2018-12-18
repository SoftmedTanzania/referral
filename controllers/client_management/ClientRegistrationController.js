/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the client_registration's controller class.
It receives calls from the "ClientRegistrationRoutes" class and
passes the calls down to the "ClientRegistrationModel" class

*/



const ClientRegistrationModel = require('../../models/client_management/ClientRegistrationModel.js');




module.exports = class ClientRegistrationController{
    constructor(){

    }
	
	
	
   static insert_client_registration(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myClientRegistrationObjectPromise = ClientRegistrationModel.insert_client_registration(jsonObject_);
		  
		   
		   myClientRegistrationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_client_registration(){
	   return new Promise(function(resolve, reject) {  
        
        var myClientRegistrationObjectPromise = ClientRegistrationModel.get_all_client_registration();
		   
		   
		   myClientRegistrationObjectPromise.then(function(result) {
        
           var object_response={result:result};
           resolve(object_response);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_client_registration(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myClientRegistrationObjectPromise = ClientRegistrationModel.get_specific_client_registration(ColumnName,value_);
		   
		   
		   myClientRegistrationObjectPromise.then(function(result) {
        
           var object_response={result:result};
           resolve(object_response);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_client_registration_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myClientRegistrationObjectPromise = ClientRegistrationModel.batch_client_registration_update(jsonObject_);
		   
		   
		   myClientRegistrationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_client_registration_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myClientRegistrationObjectPromise = ClientRegistrationModel.individual_client_registration_update(ColumnName,value_,jsonObject_);
		   
		   
		   myClientRegistrationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_client_registration_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
         
        
		var myClientRegistrationObjectPromise = ClientRegistrationModel.delete_client_registration_record(ColumnName,value_);
		    
		   
		   myClientRegistrationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}