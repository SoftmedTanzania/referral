/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the user_roles's controller class.
It receives calls from the "UserRolesRoutes" class and
passes the calls down to the "UserRolesModel" class

*/



const UserRolesModel = require('../../models/users_management/UserRolesModel.js');




module.exports = class UserRolesController{
    constructor(){

    }
	
	
	
   static insert_user_roles(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myUserRolesObjectPromise = UserRolesModel.insert_user_roles(jsonObject_);
		  
		   
		   myUserRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_user_roles(){
	   return new Promise(function(resolve, reject) {  
        
        var myUserRolesObjectPromise = UserRolesModel.get_all_user_roles();
		   
		   
		   myUserRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_user_roles(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myUserRolesObjectPromise = UserRolesModel.get_specific_user_roles(ColumnName,value_);
		   
		   
		   myUserRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_user_roles_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myUserRolesObjectPromise = UserRolesModel.batch_user_roles_update(jsonObject_);
		   
		   
		   myUserRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_user_roles_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myUserRolesObjectPromise = UserRolesModel.individual_user_roles_update(ColumnName,value_,jsonObject_);
		   
		   
		   myUserRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_user_roles_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myUserRolesObjectPromise = UserRolesModel.delete_user_roles_record(ColumnName,value_);
		    
		   
		   myUserRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}