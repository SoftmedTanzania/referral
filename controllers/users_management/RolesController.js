/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the roles's controller class.
It receives calls from the "RolesRoutes" class and
passes the calls down to the "RolesModel" class

*/



const RolesModel = require('../../models/users_management/RolesModel.js');




module.exports = class RolesController{
    constructor(){

    }
	
	
	
   insert_roles(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myRolesObject=new RolesModel();
     var myRolesObjectPromise = myRolesObject.insert_roles(jsonObject_);
		  
		   
		   myRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_roles(){
	   return new Promise(function(resolve, reject) {  
        const  myRolesObject=new RolesModel();
        var myRolesObjectPromise = myRolesObject.get_all_roles();
		   
		   
		   myRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_roles(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        const  myRolesObject=new RolesModel();
        var myRolesObjectPromise = myRolesObject.get_specific_roles(ColumnName,value_);
		   
		   
		   myRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_roles_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       const  myRolesObject=new RolesModel();
        
		var myRolesObjectPromise = myRolesObject.batch_roles_update(jsonObject_);
		   
		   
		   myRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_roles_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myRolesObject=new RolesModel();
        
		var myRolesObjectPromise = myRolesObject.individual_roles_update(ColumnName,value_,jsonObject_);
		   
		   
		   myRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_roles_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myRolesObject=new RolesModel();
        
		var myRolesObjectPromise = myRolesObject.delete_roles_record(ColumnName,value_);
		    
		   
		   myRolesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}