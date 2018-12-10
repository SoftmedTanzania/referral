/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the regions's controller class.
It receives calls from the "RegionsRoutes" class and
passes the calls down to the "RegionsModel" class

*/



const RegionsModel = require('../../models/location_management/RegionsModel.js');




module.exports = class RegionsController{
    constructor(){

    }
	
	
	
   static insert_regions(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myRegionsObjectPromise = RegionsModel.insert_regions(jsonObject_);
		  
		   
		   myRegionsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_regions(){
	   return new Promise(function(resolve, reject) {  
        
        var myRegionsObjectPromise = RegionsModel.get_all_regions();
		   
		   
		   myRegionsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_regions(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
         
        var myRegionsObjectPromise = RegionsModel.get_specific_regions(ColumnName,value_);
		   
		   
		   myRegionsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_regions_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myRegionsObjectPromise = RegionsModel.batch_regions_update(jsonObject_);
		   
		   
		   myRegionsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_regions_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myRegionsObjectPromise = RegionsModel.individual_regions_update(ColumnName,value_,jsonObject_);
		   
		   
		   myRegionsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_regions_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myRegionsObjectPromise = RegionsModel.delete_regions_record(ColumnName,value_);
		    
		   
		   myRegionsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}