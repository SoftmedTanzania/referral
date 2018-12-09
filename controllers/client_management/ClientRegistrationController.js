/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the client_registration's controller class.
It receives calls from the "ClientRegistrationRoutes" class and
passes the calls down to the "ClientRegistrationModel" class

*/



const ClientRegistrationModel = require('../../models/client_management/ClientRegistrationModel.js');




module.exports = class ClientRegistrationController{
    constructor(){

    }
	
	
	
   insert_client_registration(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myClientRegistrationObject=new ClientRegistrationModel();
     var myClientRegistrationObjectPromise = myClientRegistrationObject.insert_client_registration(jsonObject_);
		  
		   
		   myClientRegistrationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_client_registration(){
	   return new Promise(function(resolve, reject) {  
        const  myClientRegistrationObject=new ClientRegistrationModel();
        var myClientRegistrationObjectPromise = myClientRegistrationObject.get_all_client_registration();
		   
		   
		   myClientRegistrationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_client_registration(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myClientRegistrationObject=new ClientRegistrationModel();
        var myClientRegistrationObjectPromise = myClientRegistrationObject.get_specific_client_registration(ColumnName,value_);
		   
		   
		   myClientRegistrationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_client_registration_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myClientRegistrationObject=new ClientRegistrationModel();
        
		var myClientRegistrationObjectPromise = myClientRegistrationObject.batch_client_registration_update(jsonObject_);
		   
		   
		   myClientRegistrationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_client_registration_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myClientRegistrationObject=new ClientRegistrationModel();
        
		var myClientRegistrationObjectPromise = myClientRegistrationObject.individual_client_registration_update(ColumnName,value_);
		   
		   
		   myClientRegistrationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_client_registration_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
         const  myClientRegistrationObject=new ClientRegistrationModel();
        
		var myClientRegistrationObjectPromise = myClientRegistrationObject.delete_client_registration_record(ColumnName,value_);
		    
		   
		   myClientRegistrationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}