/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the client_initial_meetup's controller class.
It receives calls from the "ClientInitialMeetUpRoutes" class and
passes the calls down to the "ClientInitialMeetUpModel" class

*/



const ClientInitialMeetUpModel = require('../../models/client_management/ClientInitialMeetUpModel.js');




module.exports = class ClientInitialMeetUpController{
    constructor(){

    }
	
	
	
   insert_client_initial_meetup(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myClientInitialMeetUpObject=new ClientInitialMeetUpModel();
     var myClientInitialMeetUpObjectPromise = myClientInitialMeetUpObject.insert_client_initial_meetup(jsonObject_);
		  
		   
		   myClientInitialMeetUpObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_client_initial_meetup(){
	   return new Promise(function(resolve, reject) {  
        const  myClientInitialMeetUpObject=new ClientInitialMeetUpModel();
        var myClientInitialMeetUpObjectPromise = myClientInitialMeetUpObject.get_all_client_initial_meetup();
		   
		   
		   myClientInitialMeetUpObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_client_initial_meetup(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myClientInitialMeetUpObject=new ClientInitialMeetUpModel();
        var myClientInitialMeetUpObjectPromise = myClientInitialMeetUpObject.get_specific_client_initial_meetup(ColumnName,value_);
		   
		   
		   myClientInitialMeetUpObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_client_initial_meetup_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myClientInitialMeetUpObject=new ClientInitialMeetUpModel();
        
		var myClientInitialMeetUpObjectPromise = myClientInitialMeetUpObject.batch_client_initial_meetup_update(jsonObject_);
		   
		   
		   myClientInitialMeetUpObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_client_initial_meetup_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myClientInitialMeetUpObject=new ClientInitialMeetUpModel();
        
		var myClientInitialMeetUpObjectPromise = myClientInitialMeetUpObject.individual_client_initial_meetup_update(ColumnName,value_,jsonObject_);
		   
		   
		   myClientInitialMeetUpObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_client_initial_meetup_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
         const  myClientInitialMeetUpObject=new ClientInitialMeetUpModel();
        
		var myClientInitialMeetUpObjectPromise = myClientInitialMeetUpObject.delete_client_initial_meetup_record(ColumnName,value_);
		    
		   
		   myClientInitialMeetUpObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}