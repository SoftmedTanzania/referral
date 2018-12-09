/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the wards's controller class.
It receives calls from the "WardsRoutes" class and
passes the calls down to the "WardsModel" class

*/



const WardsModel = require('../../models/location_management/WardsModel.js');




module.exports = class WardsController{
    constructor(){

    }
	
	
	
   insert_wards(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myWardsObject=new WardsModel();
     var myWardsObjectPromise = myWardsObject.insert_wards(jsonObject_);
		  
		   
		   myWardsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_wards(){
	   return new Promise(function(resolve, reject) {  
        const  myWardsObject=new WardsModel();
        var myWardsObjectPromise = myWardsObject.get_all_wards();
		   
		   
		   myWardsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_wards(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        const  myWardsObject=new WardsModel();
        var myWardsObjectPromise = myWardsObject.get_specific_wards(ColumnName,value_);
		   
		   
		   myWardsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_wards_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       const  myWardsObject=new WardsModel();
        
		var myWardsObjectPromise = myWardsObject.batch_wards_update(jsonObject_);
		   
		   
		   myWardsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_wards_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myWardsObject=new WardsModel();
        
		var myWardsObjectPromise = myWardsObject.individual_wards_update(ColumnName,value_,jsonObject_);
		   
		   
		   myWardsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_wards_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myWardsObject=new WardsModel();
        
		var myWardsObjectPromise = myWardsObject.delete_wards_record(ColumnName,value_);
		    
		   
		   myWardsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}