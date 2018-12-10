/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the districts's controller class.
It receives calls from the "DistrictsRoutes" class and
passes the calls down to the "DistrictsModel" class

*/



const DistrictsModel = require('../../models/location_management/DistrictsModel.js');




module.exports = class DistrictsController{
    constructor(){

    }
	
	
	
   static insert_districts(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myDistrictsObjectPromise = DistrictsModel.insert_districts(jsonObject_);
		  
		   
		   myDistrictsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_districts(){
	   return new Promise(function(resolve, reject) {  
        
        var myDistrictsObjectPromise = DistrictsModel.get_all_districts();
		   
		   
		   myDistrictsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_districts(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
         
        var myDistrictsObjectPromise = DistrictsModel.get_specific_districts(ColumnName,value_);
		   
		   
		   myDistrictsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_districts_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myDistrictsObjectPromise = DistrictsModel.batch_districts_update(jsonObject_);
		   
		   
		   myDistrictsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_districts_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myDistrictsObjectPromise = DistrictsModel.individual_districts_update(ColumnName,value_,jsonObject_);
		   
		   
		   myDistrictsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_districts_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myDistrictsObjectPromise = DistrictsModel.delete_districts_record(ColumnName,value_);
		    
		   
		   myDistrictsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}