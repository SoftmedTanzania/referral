/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_progress_information_types's controller class.
It receives calls from the "BackReferralProgressInformationTypesRoutes" class and
passes the calls down to the "BackReferralProgressInformationTypesModel" class

*/



const BackReferralProgressInformationTypesModel = require('../../models/back_referrals/BackReferralProgressInformationTypesModel.js');




module.exports = class BackReferralProgressInformationTypesController{
    constructor(){

    }
	
	
	
   static insert_back_referral_progress_information_types(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myBackReferralProgressInformationTypesObjectPromise = BackReferralProgressInformationTypesModel.insert_back_referral_progress_information_types(jsonObject_);
		  
		   
		   myBackReferralProgressInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_back_referral_progress_information_types(){
	   return new Promise(function(resolve, reject) {  
        
        var myBackReferralProgressInformationTypesObjectPromise = BackReferralProgressInformationTypesModel.get_all_back_referral_progress_information_types();
		   
		   
		   myBackReferralProgressInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_back_referral_progress_information_types(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myBackReferralProgressInformationTypesObjectPromise = BackReferralProgressInformationTypesModel.get_specific_back_referral_progress_information_types(ColumnName,value_);
		   
		   
		   myBackReferralProgressInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_back_referral_progress_information_types_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myBackReferralProgressInformationTypesObjectPromise = BackReferralProgressInformationTypesModel.batch_back_referral_progress_information_types_update(jsonObject_);
		   
		   
		   myBackReferralProgressInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_back_referral_progress_information_types_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      
        
		var myBackReferralProgressInformationTypesObjectPromise = BackReferralProgressInformationTypesModel.individual_back_referral_progress_information_types_update(ColumnName,value_,jsonObject_);
		   
		   
		   myBackReferralProgressInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_back_referral_progress_information_types_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myBackReferralProgressInformationTypesObjectPromise = BackReferralProgressInformationTypesModel.delete_back_referral_progress_information_types_record(ColumnName,value_);
		    
		   
		   myBackReferralProgressInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}