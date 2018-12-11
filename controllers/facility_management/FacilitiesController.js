/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facilities's controller class.
It receives calls from the "FacilitiesRoutes" class and
passes the calls down to the "FacilitiesModel" class

*/



const FacilitiesModel = require('../../models/facility_management/FacilitiesModel.js');




module.exports = class FacilitiesController{
    constructor(){

    }
	
	
	
   static insert_facilities(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myFacilitiesObjectPromise = FacilitiesModel.insert_facilities(jsonObject_);
		  
		   
		   myFacilitiesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_facilities(){
	   return new Promise(function(resolve, reject) {  
        
        var myFacilitiesObjectPromise = FacilitiesModel.get_all_facilities();
		   
		   
		   myFacilitiesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_facilities(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myFacilitiesObjectPromise = FacilitiesModel.get_specific_facilities(ColumnName,value_);
		   
		   
		   myFacilitiesObjectPromise.then(function(result) {
           
		   var object_response={result:result};
           resolve(object_response);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_facilities_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myFacilitiesObjectPromise = FacilitiesModel.batch_facilities_update(jsonObject_);
		   
		   
		   myFacilitiesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_facilities_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myFacilitiesObjectPromise = FacilitiesModel.individual_facilities_update(ColumnName,value_,jsonObject_);
		   
		   
		   myFacilitiesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_facilities_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myFacilitiesObjectPromise = FacilitiesModel.delete_facilities_record(ColumnName,value_);
		    
		   
		   myFacilitiesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}