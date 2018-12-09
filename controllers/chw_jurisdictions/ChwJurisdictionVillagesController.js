/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the chw_jurisdiction_villages's controller class.
It receives calls from the "ChwJurisdictionVillagesRoutes" class and
passes the calls down to the "ChwJurisdictionVillagesModel" class

*/



const ChwJurisdictionVillagesModel = require('../../models/chw_jurisdictions/ChwJurisdictionVillagesModel.js');




module.exports = class ChwJurisdictionVillagesController{
    constructor(){

    }
	
	
	
   insert_chw_jurisdiction_villages(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myChwJurisdictionVillagesObject=new ChwJurisdictionVillagesModel();
     var myChwJurisdictionVillagesObjectPromise = myChwJurisdictionVillagesObject.insert_chw_jurisdiction_villages(jsonObject_);
		  
		   
		   myChwJurisdictionVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_chw_jurisdiction_villages(){
	   return new Promise(function(resolve, reject) {  
       const  myChwJurisdictionVillagesObject=new ChwJurisdictionVillagesModel();
        var myChwJurisdictionVillagesObjectPromise = myChwJurisdictionVillagesObject.get_all_chw_jurisdiction_villages();
		   
		   
		   myChwJurisdictionVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_chw_jurisdiction_villages(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        const  myChwJurisdictionVillagesObject=new ChwJurisdictionVillagesModel();
        var myChwJurisdictionVillagesObjectPromise = myChwJurisdictionVillagesObject.get_specific_chw_jurisdiction_villages(ColumnName,value_);
		   
		   
		   myChwJurisdictionVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_chw_jurisdiction_villages_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       const  myChwJurisdictionVillagesObject=new ChwJurisdictionVillagesModel();
        
		var myChwJurisdictionVillagesObjectPromise = myChwJurisdictionVillagesObject.batch_chw_jurisdiction_villages_update(jsonObject_);
		   
		   
		   myChwJurisdictionVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_chw_jurisdiction_villages_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myChwJurisdictionVillagesObject=new ChwJurisdictionVillagesModel();
        
		var myChwJurisdictionVillagesObjectPromise = myChwJurisdictionVillagesObject.individual_chw_jurisdiction_villages_update(ColumnName,value_,jsonObject_);
		   
		   
		   myChwJurisdictionVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_chw_jurisdiction_villages_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myChwJurisdictionVillagesObject=new ChwJurisdictionVillagesModel();
        
		var myChwJurisdictionVillagesObjectPromise = myChwJurisdictionVillagesObject.delete_chw_jurisdiction_villages_record(ColumnName,value_);
		    
		   
		   myChwJurisdictionVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}