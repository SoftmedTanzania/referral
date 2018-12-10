/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_encounters's controller class.
It receives calls from the "BackReferralEncountersRoutes" class and
passes the calls down to the "BackReferralEncountersModel" class

*/



const BackReferralEncountersModel = require('../../models/back_referrals/BackReferralEncountersModel.js');




module.exports = class BackReferralEncountersController{
    constructor(){

    }
	
	
	
   static insert_back_referral_encounters(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myBackReferralEncountersObjectPromise = BackReferralEncountersModel.insert_back_referral_encounters(jsonObject_);
		  
		   
		   myBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_back_referral_encounters(){
	   return new Promise(function(resolve, reject) {  
        
        var myBackReferralEncountersObjectPromise = BackReferralEncountersModel.get_all_back_referral_encounters();
		   
		   
		   myBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_back_referral_encounters(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myBackReferralEncountersObjectPromise = BackReferralEncountersModel.get_specific_back_referral_encounters(ColumnName,value_);
		   
		   
		   myBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_back_referral_encounters_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myBackReferralEncountersObjectPromise = BackReferralEncountersModel.batch_back_referral_encounters_update(jsonObject_);
		   
		   
		   myBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_back_referral_encounters_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      
        
		var myBackReferralEncountersObjectPromise = BackReferralEncountersModel.individual_back_referral_encounters_update(ColumnName,value_,jsonObject_);
		   
		   
		   myBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_back_referral_encounters_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myBackReferralEncountersObjectPromise = BackReferralEncountersModel.delete_back_referral_encounters_record(ColumnName,value_);
		    
		   
		   myBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}