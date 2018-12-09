/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the user_roles's controller class.
It receives calls from the "UserRolesRoutes" class and
passes the calls down to the "UserRolesModel" class

*/



const UserRolesModel = require('../../models/users_management/UserRolesModel.js');




module.exports = class UserRolesController{
    constructor(){

    }
	
	
	
   insert_user_roles(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myUserRolesObject=new UserRolesModel();
     var myUserRolesObjectPromise = myUserRolesObject.insert_user_roles(jsonObject_);
		  
		   
		   myUserRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_user_roles(){
	   return new Promise(function(resolve, reject) {  
        const  myUserRolesObject=new UserRolesModel();
        var myUserRolesObjectPromise = myUserRolesObject.get_all_user_roles();
		   
		   
		   myUserRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_user_roles(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        const  myUserRolesObject=new UserRolesModel();
        var myUserRolesObjectPromise = myUserRolesObject.get_specific_user_roles(ColumnName,value_);
		   
		   
		   myUserRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_user_roles_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       const  myUserRolesObject=new UserRolesModel();
        
		var myUserRolesObjectPromise = myUserRolesObject.batch_user_roles_update(jsonObject_);
		   
		   
		   myUserRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_user_roles_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myUserRolesObject=new UserRolesModel();
        
		var myUserRolesObjectPromise = myUserRolesObject.individual_user_roles_update(ColumnName,value_);
		   
		   
		   myUserRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_user_roles_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myUserRolesObject=new UserRolesModel();
        
		var myUserRolesObjectPromise = myUserRolesObject.delete_user_roles_record(ColumnName,value_);
		    
		   
		   myUserRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}