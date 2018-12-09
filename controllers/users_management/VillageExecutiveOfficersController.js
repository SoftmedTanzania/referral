/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the village_executive_officers's controller class.
It receives calls from the "VillageExecutiveOfficersRoutes" class and
passes the calls down to the "VillageExecutiveOfficersModel" class

*/



const VillageExecutiveOfficersModel = require('../../models/users_management/VillageExecutiveOfficersModel.js');




module.exports = class VillageExecutiveOfficersController{
    constructor(){

    }
	
	
	
   insert_village_executive_officers(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myVillageExecutiveOfficersObject=new VillageExecutiveOfficersModel();
     var myVillageExecutiveOfficersObjectPromise = myVillageExecutiveOfficersObject.insert_village_executive_officers(jsonObject_);
		  
		   
		   myVillageExecutiveOfficersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_village_executive_officers(){
	   return new Promise(function(resolve, reject) {  
        const  myVillageExecutiveOfficersObject=new VillageExecutiveOfficersModel();
        var myVillageExecutiveOfficersObjectPromise = myVillageExecutiveOfficersObject.get_all_village_executive_officers();
		   
		   
		   myVillageExecutiveOfficersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_village_executive_officers(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        const  myVillageExecutiveOfficersObject=new VillageExecutiveOfficersModel();
        var myVillageExecutiveOfficersObjectPromise = myVillageExecutiveOfficersObject.get_specific_village_executive_officers(ColumnName,value_);
		   
		   
		   myVillageExecutiveOfficersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_village_executive_officers_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       const  myVillageExecutiveOfficersObject=new VillageExecutiveOfficersModel();
        
		var myVillageExecutiveOfficersObjectPromise = myVillageExecutiveOfficersObject.batch_village_executive_officers_update(jsonObject_);
		   
		   
		   myVillageExecutiveOfficersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_village_executive_officers_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       const  myVillageExecutiveOfficersObject=new VillageExecutiveOfficersModel();
        
		var myVillageExecutiveOfficersObjectPromise = myVillageExecutiveOfficersObject.individual_village_executive_officers_update(ColumnName,value_,jsonObject_);
		   
		   
		   myVillageExecutiveOfficersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_village_executive_officers_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myVillageExecutiveOfficersObject=new VillageExecutiveOfficersModel();
        
		var myVillageExecutiveOfficersObjectPromise = myVillageExecutiveOfficersObject.delete_village_executive_officers_record(ColumnName,value_);
		    
		   
		   myVillageExecutiveOfficersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}