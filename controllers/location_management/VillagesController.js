/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the villages's controller class.
It receives calls from the "VillagesRoutes" class and
passes the calls down to the "VillagesModel" class

*/



const VillagesModel = require('../../models/location_management/VillagesModel.js');




module.exports = class VillagesController{
    constructor(){

    }
	
	
	
   static insert_villages(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myVillagesObjectPromise = VillagesModel.insert_villages(jsonObject_);
		  
		   
		   myVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_villages(){
	   return new Promise(function(resolve, reject) {  
        
        var myVillagesObjectPromise = VillagesModel.get_all_villages();
		   
		   
		   myVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_villages(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myVillagesObjectPromise = VillagesModel.get_specific_villages(ColumnName,value_);
		   
		   
		   myVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_villages_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myVillagesObjectPromise = VillagesModel.batch_villages_update(jsonObject_);
		   
		   
		   myVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_villages_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myVillagesObjectPromise = VillagesModel.individual_villages_update(ColumnName,value_,jsonObject_);
		   
		   
		   myVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_villages_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myVillagesObjectPromise = VillagesModel.delete_villages_record(ColumnName,value_);
		    
		   
		   myVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}