/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_encounters's controller class.
It receives calls from the "BackReferralEncountersRoutes" class and
passes the calls down to the "BackReferralEncountersModel" class

*/



const BackReferralEncountersModel = require('../../models/back_referrals/BackReferralEncountersModel.js');




module.exports = class BackReferralEncountersController{
    constructor(){

    }
	
	
	
   insert_back_referral_encounters(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myBackReferralEncountersObject=new BackReferralEncountersModel();
     var myBackReferralEncountersObjectPromise = myBackReferralEncountersObject.insert_back_referral_encounters(jsonObject_);
		  
		   
		   myBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_back_referral_encounters(){
	   return new Promise(function(resolve, reject) {  
        const  myBackReferralEncountersObject=new BackReferralEncountersModel();
        var myBackReferralEncountersObjectPromise = myBackReferralEncountersObject.get_all_back_referral_encounters();
		   
		   
		   myBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_back_referral_encounters(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myBackReferralEncountersObject=new BackReferralEncountersModel();
        var myBackReferralEncountersObjectPromise = myBackReferralEncountersObject.get_specific_back_referral_encounters(ColumnName,value_);
		   
		   
		   myBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_back_referral_encounters_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myBackReferralEncountersObject=new BackReferralEncountersModel();
        
		var myBackReferralEncountersObjectPromise = myBackReferralEncountersObject.batch_back_referral_encounters_update(jsonObject_);
		   
		   
		   myBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_back_referral_encounters_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      const  myBackReferralEncountersObject=new BackReferralEncountersModel();
        
		var myBackReferralEncountersObjectPromise = myBackReferralEncountersObject.individual_back_referral_encounters_update(ColumnName,value_);
		   
		   
		   myBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_back_referral_encounters_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myBackReferralEncountersObject=new BackReferralEncountersModel();
        
		var myBackReferralEncountersObjectPromise = myBackReferralEncountersObject.delete_back_referral_encounters_record(ColumnName,value_);
		    
		   
		   myBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}