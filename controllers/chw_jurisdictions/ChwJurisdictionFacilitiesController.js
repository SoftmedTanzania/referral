/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the chw_jurisdiction_facilities's controller class.
It receives calls from the "ChwJurisdictionFacilitiesRoutes" class and
passes the calls down to the "ChwJurisdictionFacilitiesModel" class

*/



const ChwJurisdictionFacilitiesModel = require('../../models/chw_jurisdictions/ChwJurisdictionFacilitiesModel.js');




module.exports = class ChwJurisdictionFacilitiesController{
    constructor(){

    }
	
	
	
   insert_chw_jurisdiction_facilities(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myChwJurisdictionFacilitiesObject=new ChwJurisdictionFacilitiesModel();
     var myChwJurisdictionFacilitiesControllerObjectPromise = myChwJurisdictionFacilitiesControllerObject.insert_chw_jurisdiction_facilities(jsonObject_);
		  
		   
		   myChwJurisdictionFacilitiesControllerObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_chw_jurisdiction_facilities(){
	   return new Promise(function(resolve, reject) {  
       const  myChwJurisdictionFacilitiesObject=new ChwJurisdictionFacilitiesModel();
        var myChwJurisdictionFacilitiesControllerObjectPromise = myChwJurisdictionFacilitiesControllerObject.get_all_chw_jurisdiction_facilities();
		   
		   
		   myChwJurisdictionFacilitiesControllerObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_chw_jurisdiction_facilities(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        const  myChwJurisdictionFacilitiesObject=new ChwJurisdictionFacilitiesModel();
        var myChwJurisdictionFacilitiesControllerObjectPromise = myChwJurisdictionFacilitiesControllerObject.get_specific_chw_jurisdiction_facilities(ColumnName,value_);
		   
		   
		   myChwJurisdictionFacilitiesControllerObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_chw_jurisdiction_facilities_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       const  myChwJurisdictionFacilitiesObject=new ChwJurisdictionFacilitiesModel();
        
		var myChwJurisdictionFacilitiesControllerObjectPromise = myChwJurisdictionFacilitiesControllerObject.batch_chw_jurisdiction_facilities_update(jsonObject_);
		   
		   
		   myChwJurisdictionFacilitiesControllerObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_chw_jurisdiction_facilities_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myChwJurisdictionFacilitiesObject=new ChwJurisdictionFacilitiesModel();
        
		var myChwJurisdictionFacilitiesControllerObjectPromise = myChwJurisdictionFacilitiesControllerObject.individual_chw_jurisdiction_facilities_update(ColumnName,value_,jsonObject_);
		   
		   
		   myChwJurisdictionFacilitiesControllerObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_chw_jurisdiction_facilities_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myChwJurisdictionFacilitiesObject=new ChwJurisdictionFacilitiesModel();
        
		var myChwJurisdictionFacilitiesControllerObjectPromise = myChwJurisdictionFacilitiesControllerObject.delete_chw_jurisdiction_facilities_record(ColumnName,value_);
		    
		   
		   myChwJurisdictionFacilitiesControllerObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}