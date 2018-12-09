/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facilities's controller class.
It receives calls from the "FacilitiesRoutes" class and
passes the calls down to the "FacilitiesModel" class

*/



const FacilitiesModel = require('../../models/facility_management/FacilitiesModel.js');




module.exports = class FacilitiesController{
    constructor(){

    }
	
	
	
   insert_facilities(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myFacilitiesObject=new FacilitiesModel();
     var myFacilitiesObjectPromise = myFacilitiesObject.insert_facilities(jsonObject_);
		  
		   
		   myFacilitiesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_facilities(){
	   return new Promise(function(resolve, reject) {  
        const  myFacilitiesObject=new FacilitiesModel();
        var myFacilitiesObjectPromise = myFacilitiesObject.get_all_facilities();
		   
		   
		   myFacilitiesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_facilities(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myFacilitiesObject=new FacilitiesModel();
        var myFacilitiesObjectPromise = myFacilitiesObject.get_specific_facilities(ColumnName,value_);
		   
		   
		   myFacilitiesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_facilities_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       const  myFacilitiesObject=new FacilitiesModel();
        
		var myFacilitiesObjectPromise = myFacilitiesObject.batch_facilities_update(jsonObject_);
		   
		   
		   myFacilitiesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_facilities_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myFacilitiesObject=new FacilitiesModel();
        
		var myFacilitiesObjectPromise = myFacilitiesObject.individual_facilities_update(ColumnName,value_);
		   
		   
		   myFacilitiesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_facilities_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myFacilitiesObject=new FacilitiesModel();
        
		var myFacilitiesObjectPromise = myFacilitiesObject.delete_facilities_record(ColumnName,value_);
		    
		   
		   myFacilitiesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}