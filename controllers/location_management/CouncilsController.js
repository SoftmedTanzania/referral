/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the councils's controller class.
It receives calls from the "CouncilsRoutes" class and
passes the calls down to the "CouncilsModel" class

*/



const CouncilsModel = require('../../models/location_management/CouncilsModel.js');




module.exports = class CouncilsController{
    constructor(){

    }
	
	
	
   static insert_councils(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myCouncilsObjectPromise = CouncilsModel.insert_councils(jsonObject_);
		  
		   
		   myCouncilsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_councils(){
	   return new Promise(function(resolve, reject) {  
        
        var myCouncilsObjectPromise = CouncilsModel.get_all_councils();
		   
		   
		   myCouncilsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_councils(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
         
        var myCouncilsObjectPromise = CouncilsModel.get_specific_councils(ColumnName,value_);
		   
		   
		   myCouncilsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_councils_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myCouncilsObjectPromise = CouncilsModel.batch_councils_update(jsonObject_);
		   
		   
		   myCouncilsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_councils_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myCouncilsObjectPromise = CouncilsModel.individual_councils_update(ColumnName,value_,jsonObject_);
		   
		   
		   myCouncilsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_councils_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myCouncilsObjectPromise = CouncilsModel.delete_councils_record(ColumnName,value_);
		    
		   
		   myCouncilsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}