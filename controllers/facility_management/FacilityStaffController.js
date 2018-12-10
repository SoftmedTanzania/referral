/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facility_staff's controller class.
It receives calls from the "FacilityStaffRoutes" class and
passes the calls down to the "FacilityStaffModel" class

*/



const FacilityStaffModel = require('../../models/facility_management/FacilityStaffModel.js');




module.exports = class FacilityStaffController{
    constructor(){

    }
	
	
	
   static insert_facility_staff(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myFacilityStaffObjectPromise = FacilityStaffModel.insert_facility_staff(jsonObject_);
		  
		   
		   myFacilityStaffObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_facility_staff(){
	   return new Promise(function(resolve, reject) {  
        
        var myFacilityStaffObjectPromise = FacilityStaffModel.get_all_facility_staff();
		   
		   
		   myFacilityStaffObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_facility_staff(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myFacilityStaffObjectPromise = FacilityStaffModel.get_specific_facility_staff(ColumnName,value_);
		   
		   
		   myFacilityStaffObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_facility_staff_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myFacilityStaffObjectPromise = FacilityStaffModel.batch_facility_staff_update(jsonObject_);
		   
		   
		   myFacilityStaffObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_facility_staff_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myFacilityStaffObjectPromise = FacilityStaffModel.individual_facility_staff_update(ColumnName,value_,jsonObject_);
		   
		   
		   myFacilityStaffObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_facility_staff_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
         
        
		var myFacilityStaffObjectPromise = FacilityStaffModel.delete_facility_staff_record(ColumnName,value_);
		    
		   
		   myFacilityStaffObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}