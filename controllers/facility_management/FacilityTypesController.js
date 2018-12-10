/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facility_types's controller class.
It receives calls from the "FacilityTypesRoutes" class and
passes the calls down to the "FacilityTypesModel" class

*/



const FacilityTypesModel = require('../../models/facility_management/FacilityTypesModel.js');




module.exports = class FacilityTypesController{
    constructor(){

    }
	
	
	
   static insert_facility_types(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myFacilityTypesObjectPromise = FacilityTypesModel.insert_facility_types(jsonObject_);
		  
		   
		   myFacilityTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_facility_types(){
	   return new Promise(function(resolve, reject) {  
       
        var myFacilityTypesObjectPromise = FacilityTypesModel.get_all_facility_types();
		   
		   
		   myFacilityTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_facility_types(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
      
        var myFacilityTypesObjectPromise = FacilityTypesModel.get_specific_facility_types(ColumnName,value_);
		   
		   
		   myFacilityTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_facility_types_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myFacilityTypesObjectPromise = FacilityTypesModel.batch_facility_types_update(jsonObject_);
		   
		   
		   myFacilityTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_facility_types_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myFacilityTypesObjectPromise = FacilityTypesModel.individual_facility_types_update(ColumnName,value_,jsonObject_);
		   
		   
		   myFacilityTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_facility_types_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myFacilityTypesObjectPromise = FacilityTypesModel.delete_facility_types_record(ColumnName,value_);
		    
		   
		   myFacilityTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}