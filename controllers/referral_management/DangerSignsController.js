/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the danger_signs's controller class.
It receives calls from the "DangerSignsRoutes" class and
passes the calls down to the "DangerSignsModel" class

*/



const DangerSignsModel = require('../../models/referral_management/DangerSignsModel.js');




module.exports = class DangerSignsController{
    constructor(){

    }
	
	
	
   insert_danger_signs(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myDangerSignsObject=new DangerSignsModel();
     var myDangerSignsObjectPromise = myDangerSignsObject.insert_danger_signs(jsonObject_);
		  
		   
		   myDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_danger_signs(){
	   return new Promise(function(resolve, reject) {  
        const  myDangerSignsObject=new DangerSignsModel();
        var myDangerSignsObjectPromise = myDangerSignsObject.get_all_danger_signs();
		   
		   
		   myDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_danger_signs(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myDangerSignsObject=new DangerSignsModel();
        var myDangerSignsObjectPromise = myDangerSignsObject.get_specific_danger_signs(ColumnName,value_);
		   
		   
		   myDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_danger_signs_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myDangerSignsObject=new DangerSignsModel();
        
		var myDangerSignsObjectPromise = myDangerSignsObject.batch_danger_signs_update(jsonObject_);
		   
		   
		   myDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_danger_signs_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      const  myDangerSignsObject=new DangerSignsModel();
        
		var myDangerSignsObjectPromise = myDangerSignsObject.individual_danger_signs_update(ColumnName,value_,jsonObject_);
		   
		   
		   myDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_danger_signs_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myDangerSignsObject=new DangerSignsModel();
        
		var myDangerSignsObjectPromise = myDangerSignsObject.delete_danger_signs_record(ColumnName,value_);
		    
		   
		   myDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}