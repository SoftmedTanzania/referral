/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_request_information_types's controller class.
It receives calls from the "BackReferralRequestInformationRoutes" class and
passes the calls down to the "BackReferralRequestInformationModel" class

*/



const BackReferralRequestInformationTypesModel = require('../../models/back_referrals/BackReferralRequestInformationModel.js');




module.exports = class BackReferralRequestInformationTypesController{
    constructor(){

    }
	
	
	
   static insert_back_referral_request_information_types(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myBackReferralRequestInformationTypesObjectPromise = BackReferralRequestInformationTypesModel.insert_back_referral_request_information_types(jsonObject_);
		  
		   
		   myBackReferralRequestInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_back_referral_request_information_types(){
	   return new Promise(function(resolve, reject) {  
        
        var myBackReferralRequestInformationTypesObjectPromise = BackReferralRequestInformationTypesModel.get_all_back_referral_request_information_types();
		   
		   
		   myBackReferralRequestInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_back_referral_request_information_types(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myBackReferralRequestInformationTypesObjectPromise = BackReferralRequestInformationTypesModel.get_specific_back_referral_request_information_types(ColumnName,value_);
		   
		   
		   myBackReferralRequestInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_back_referral_request_information_types_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myBackReferralRequestInformationTypesObjectPromise = BackReferralRequestInformationTypesModel.batch_back_referral_request_information_types_update(jsonObject_);
		   
		   
		   myBackReferralRequestInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_back_referral_request_information_types_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
     
        
		var myBackReferralRequestInformationTypesObjectPromise = BackReferralRequestInformationTypesModel.individual_back_referral_request_information_types_update(ColumnName,value_,jsonObject_);
		   
		   
		   myBackReferralRequestInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_back_referral_request_information_types_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myBackReferralRequestInformationTypesObjectPromise = BackReferralRequestInformationTypesModel.delete_back_referral_request_information_types_record(ColumnName,value_);
		    
		   
		   myBackReferralRequestInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}