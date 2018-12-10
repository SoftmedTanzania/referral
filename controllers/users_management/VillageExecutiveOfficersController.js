/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the village_executive_officers's controller class.
It receives calls from the "VillageExecutiveOfficersRoutes" class and
passes the calls down to the "VillageExecutiveOfficersModel" class

*/



const VillageExecutiveOfficersModel = require('../../models/users_management/VillageExecutiveOfficersModel.js');




module.exports = class VillageExecutiveOfficersController{
    constructor(){

    }
	
	
	
   static insert_village_executive_officers(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myVillageExecutiveOfficersObjectPromise = VillageExecutiveOfficersModel.insert_village_executive_officers(jsonObject_);
		  
		   
		   myVillageExecutiveOfficersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_village_executive_officers(){
	   return new Promise(function(resolve, reject) {  
        
        var myVillageExecutiveOfficersObjectPromise = VillageExecutiveOfficersModel.get_all_village_executive_officers();
		   
		   
		   myVillageExecutiveOfficersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_village_executive_officers(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myVillageExecutiveOfficersObjectPromise = VillageExecutiveOfficersModel.get_specific_village_executive_officers(ColumnName,value_);
		   
		   
		   myVillageExecutiveOfficersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_village_executive_officers_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myVillageExecutiveOfficersObjectPromise = VillageExecutiveOfficersModel.batch_village_executive_officers_update(jsonObject_);
		   
		   
		   myVillageExecutiveOfficersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_village_executive_officers_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myVillageExecutiveOfficersObjectPromise = VillageExecutiveOfficersModel.individual_village_executive_officers_update(ColumnName,value_,jsonObject_);
		   
		   
		   myVillageExecutiveOfficersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_village_executive_officers_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myVillageExecutiveOfficersObjectPromise = VillageExecutiveOfficersModel.delete_village_executive_officers_record(ColumnName,value_);
		    
		   
		   myVillageExecutiveOfficersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}