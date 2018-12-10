/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the roles's controller class.
It receives calls from the "RolesRoutes" class and
passes the calls down to the "RolesModel" class

*/



const RolesModel = require('../../models/users_management/RolesModel.js');




module.exports = class RolesController{
    constructor(){

    }
	
	
	
   static insert_roles(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myRolesObjectPromise = RolesModel.insert_roles(jsonObject_);
		  
		   
		   myRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_roles(){
	   return new Promise(function(resolve, reject) {  
        
        var myRolesObjectPromise = RolesModel.get_all_roles();
		   
		   
		   myRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_roles(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myRolesObjectPromise = RolesModel.get_specific_roles(ColumnName,value_);
		   
		   
		   myRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_roles_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myRolesObjectPromise = RolesModel.batch_roles_update(jsonObject_);
		   
		   
		   myRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_roles_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myRolesObjectPromise = RolesModel.individual_roles_update(ColumnName,value_,jsonObject_);
		   
		   
		   myRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_roles_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myRolesObjectPromise = RolesModel.delete_roles_record(ColumnName,value_);
		    
		   
		   myRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}