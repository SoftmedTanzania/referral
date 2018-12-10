/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_progress_information's controller class.
It receives calls from the "BackReferralProgressInformationRoutes" class and
passes the calls down to the "BackReferralProgressInformationModel" class

*/



const BackReferralProgressInformationModel = require('../../models/back_referrals/BackReferralProgressInformationModel.js');




module.exports = class BackReferralProgressInformationController{
    constructor(){

    }
	
	
	
   static insert_back_referral_progress_information(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myBackReferralProgressInformationObjectPromise = BackReferralProgressInformationModel.insert_back_referral_progress_information(jsonObject_);
		  
		   
		   myBackReferralProgressInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_back_referral_progress_information(){
	   return new Promise(function(resolve, reject) {  
        
        var myBackReferralProgressInformationObjectPromise = BackReferralProgressInformationModel.get_all_back_referral_progress_information();
		   
		   
		   myBackReferralProgressInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_back_referral_progress_information(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myBackReferralProgressInformationObjectPromise = BackReferralProgressInformationModel.get_specific_back_referral_progress_information(ColumnName,value_);
		   
		   
		   myBackReferralProgressInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_back_referral_progress_information_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myBackReferralProgressInformationObjectPromise = BackReferralProgressInformationModel.batch_back_referral_progress_information_update(jsonObject_);
		   
		   
		   myBackReferralProgressInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_back_referral_progress_information_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      
        
		var myBackReferralProgressInformationObjectPromise = BackReferralProgressInformationModel.individual_back_referral_progress_information_update(ColumnName,value_,jsonObject_);
		   
		   
		   myBackReferralProgressInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_back_referral_progress_information_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myBackReferralProgressInformationObjectPromise = BackReferralProgressInformationModel.delete_back_referral_progress_information_record(ColumnName,value_);
		    
		   
		   myBackReferralProgressInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}