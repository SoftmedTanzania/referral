/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the referral_service_types's controller class.
It receives calls from the "ReferralServiceTypesRoutes" class and
passes the calls down to the "ReferralServiceTypesModel" class

*/



const ReferralServiceTypesModel = require('../../models/referral_management/ReferralServiceTypesModel.js');




module.exports = class ReferralServiceTypesController{
    constructor(){

    }
	
	
	
   static insert_referral_service_types(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myReferralServiceTypesObjectPromise = ReferralServiceTypesModel.insert_referral_service_types(jsonObject_);
		  
		   
		   myReferralServiceTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_referral_service_types(){
	   return new Promise(function(resolve, reject) {  
        
        var myReferralServiceTypesObjectPromise = ReferralServiceTypesModel.get_all_referral_service_types();
		   
		   
		   myReferralServiceTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_referral_service_types(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myReferralServiceTypesObjectPromise = ReferralServiceTypesModel.get_specific_referral_service_types(ColumnName,value_);
		   
		   
		   myReferralServiceTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_referral_service_types_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myReferralServiceTypesObjectPromise = ReferralServiceTypesModel.batch_referral_service_types_update(jsonObject_);
		   
		   
		   myReferralServiceTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_referral_service_types_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myReferralServiceTypesObjectPromise = ReferralServiceTypesModel.individual_referral_service_types_update(ColumnName,value_,jsonObject_);
		   
		   
		   myReferralServiceTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_referral_service_types_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myReferralServiceTypesObjectPromise = ReferralServiceTypesModel.delete_referral_service_types_record(ColumnName,value_);
		    
		   
		   myReferralServiceTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}