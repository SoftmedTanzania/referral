/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the wards's controller class.
It receives calls from the "WardsRoutes" class and
passes the calls down to the "WardsModel" class

*/



const WardsModel = require('../../models/location_management/WardsModel.js');




module.exports = class WardsController{
    constructor(){

    }
	
	
	
   static insert_wards(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myWardsObjectPromise = WardsModel.insert_wards(jsonObject_);
		  
		   
		   myWardsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_wards(){
	   return new Promise(function(resolve, reject) {  
        
        var myWardsObjectPromise = WardsModel.get_all_wards();
		   
		   
		   myWardsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_wards(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myWardsObjectPromise = WardsModel.get_specific_wards(ColumnName,value_);
		   
		   
		   myWardsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_wards_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myWardsObjectPromise = WardsModel.batch_wards_update(jsonObject_);
		   
		   
		   myWardsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_wards_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myWardsObjectPromise = WardsModel.individual_wards_update(ColumnName,value_,jsonObject_);
		   
		   
		   myWardsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_wards_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myWardsObjectPromise = WardsModel.delete_wards_record(ColumnName,value_);
		    
		   
		   myWardsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}