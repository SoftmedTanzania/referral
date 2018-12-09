/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the villages's controller class.
It receives calls from the "VillagesRoutes" class and
passes the calls down to the "VillagesModel" class

*/



const VillagesModel = require('../../models/location_management/VillagesModel.js');




module.exports = class VillagesController{
    constructor(){

    }
	
	
	
   insert_villages(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myVillagesObject=new VillagesModel();
     var myVillagesObjectPromise = myVillagesObject.insert_villages(jsonObject_);
		  
		   
		   myVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_villages(){
	   return new Promise(function(resolve, reject) {  
        const  myVillagesObject=new VillagesModel();
        var myVillagesObjectPromise = myVillagesObject.get_all_villages();
		   
		   
		   myVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_villages(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        const  myVillagesObject=new VillagesModel();
        var myVillagesObjectPromise = myVillagesObject.get_specific_villages(ColumnName,value_);
		   
		   
		   myVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_villages_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       const  myVillagesObject=new VillagesModel();
        
		var myVillagesObjectPromise = myVillagesObject.batch_villages_update(jsonObject_);
		   
		   
		   myVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_villages_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myVillagesObject=new VillagesModel();
        
		var myVillagesObjectPromise = myVillagesObject.individual_villages_update(ColumnName,value_,jsonObject_);
		   
		   
		   myVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_villages_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myVillagesObject=new VillagesModel();
        
		var myVillagesObjectPromise = myVillagesObject.delete_villages_record(ColumnName,value_);
		    
		   
		   myVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}