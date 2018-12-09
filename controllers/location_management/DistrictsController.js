/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the districts's controller class.
It receives calls from the "DistrictsRoutes" class and
passes the calls down to the "DistrictsModel" class

*/



const DistrictsModel = require('../../models/location_management/DistrictsModel.js');




module.exports = class DistrictsController{
    constructor(){

    }
	
	
	
   insert_districts(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myDistrictsObject=new DistrictsModel();
     var myDistrictsObjectPromise = myDistrictsObject.insert_districts(jsonObject_);
		  
		   
		   myDistrictsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_districts(){
	   return new Promise(function(resolve, reject) {  
        const  myDistrictsObject=new DistrictsModel();
        var myDistrictsObjectPromise = myDistrictsObject.get_all_districts();
		   
		   
		   myDistrictsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_districts(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
         const  myDistrictsObject=new DistrictsModel();
        var myDistrictsObjectPromise = myDistrictsObject.get_specific_districts(ColumnName,value_);
		   
		   
		   myDistrictsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_districts_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       const  myDistrictsObject=new DistrictsModel();
        
		var myDistrictsObjectPromise = myDistrictsObject.batch_districts_update(jsonObject_);
		   
		   
		   myDistrictsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_districts_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myDistrictsObject=new DistrictsModel();
        
		var myDistrictsObjectPromise = myDistrictsObject.individual_districts_update(ColumnName,value_);
		   
		   
		   myDistrictsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_districts_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myDistrictsObject=new DistrictsModel();
        
		var myDistrictsObjectPromise = myDistrictsObject.delete_districts_record(ColumnName,value_);
		    
		   
		   myDistrictsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}