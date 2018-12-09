/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facility_staff's controller class.
It receives calls from the "FacilityStaffRoutes" class and
passes the calls down to the "FacilityStaffModel" class

*/



const FacilityStaffModel = require('../../models/facility_management/FacilityStaffModel.js');




module.exports = class FacilityStaffController{
    constructor(){

    }
	
	
	
   insert_facility_staff(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myFacilityStaffObject=new FacilityStaffModel();
     var myFacilityStaffObjectPromise = myFacilityStaffObject.insert_facility_staff(jsonObject_);
		  
		   
		   myFacilityStaffObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_facility_staff(){
	   return new Promise(function(resolve, reject) {  
        const  myFacilityStaffObject=new FacilityStaffModel();
        var myFacilityStaffObjectPromise = myFacilityStaffObject.get_all_facility_staff();
		   
		   
		   myFacilityStaffObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_facility_staff(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myFacilityStaffObject=new FacilityStaffModel();
        var myFacilityStaffObjectPromise = myFacilityStaffObject.get_specific_facility_staff(ColumnName,value_);
		   
		   
		   myFacilityStaffObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_facility_staff_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       const  myFacilityStaffObject=new FacilityStaffModel();
        
		var myFacilityStaffObjectPromise = myFacilityStaffObject.batch_facility_staff_update(jsonObject_);
		   
		   
		   myFacilityStaffObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_facility_staff_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myFacilityStaffObject=new FacilityStaffModel();
        
		var myFacilityStaffObjectPromise = myFacilityStaffObject.individual_facility_staff_update(ColumnName,value_,jsonObject_);
		   
		   
		   myFacilityStaffObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_facility_staff_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
         const  myFacilityStaffObject=new FacilityStaffModel();
        
		var myFacilityStaffObjectPromise = myFacilityStaffObject.delete_facility_staff_record(ColumnName,value_);
		    
		   
		   myFacilityStaffObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}