/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the danger_signs's controller class.
It receives calls from the "DangerSignsRoutes" class and
passes the calls down to the "DangerSignsModel" class

*/



const DangerSignsModel = require('../../models/referral_management/DangerSignsModel.js');




module.exports = class DangerSignsController{
    constructor(){

    }
	
	
	
   static insert_danger_signs(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myDangerSignsObjectPromise = DangerSignsModel.insert_danger_signs(jsonObject_);
		  
		   
		   myDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_danger_signs(){
	   return new Promise(function(resolve, reject) {  
        
        var myDangerSignsObjectPromise = DangerSignsModel.get_all_danger_signs();
		   
		   
		   myDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_danger_signs(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
      
        var myDangerSignsObjectPromise = DangerSignsModel.get_specific_danger_signs(ColumnName,value_);
		   
		   
		   myDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_danger_signs_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myDangerSignsObjectPromise = DangerSignsModel.batch_danger_signs_update(jsonObject_);
		   
		   
		   myDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_danger_signs_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      
        
		var myDangerSignsObjectPromise = DangerSignsModel.individual_danger_signs_update(ColumnName,value_,jsonObject_);
		   
		   
		   myDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_danger_signs_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myDangerSignsObjectPromise = DangerSignsModel.delete_danger_signs_record(ColumnName,value_);
		    
		   
		   myDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}