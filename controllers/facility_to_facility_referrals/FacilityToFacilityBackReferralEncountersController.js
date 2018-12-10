/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facility_to_facility_back_referral_encounters's controller class.
It receives calls from the "FacilityToFacilityBackReferralEncountersRoutes" class and
passes the calls down to the "FacilityToFacilityBackReferralEncountersModel" class

*/



const FacilityToFacilityBackReferralEncountersModel = require('../../models/facility_to_facility_referrals/FacilityToFacilityBackReferralEncountersModel.js');




module.exports = class FacilityToFacilityBackReferralEncountersController{
    constructor(){

    }
	
	
	
   static insert_facility_to_facility_back_referral_encounters(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myFacilityToFacilityBackReferralEncountersObjectPromise = FacilityToFacilityBackReferralEncountersModel.insert_facility_to_facility_back_referral_encounters(jsonObject_);
		  
		   
		   myFacilityToFacilityBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_facility_to_facility_back_referral_encounters(){
	   return new Promise(function(resolve, reject) {  
       
        var myFacilityToFacilityBackReferralEncountersObjectPromise = FacilityToFacilityBackReferralEncountersModel.get_all_facility_to_facility_back_referral_encounters();
		   
		   
		   myFacilityToFacilityBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_facility_to_facility_back_referral_encounters(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myFacilityToFacilityBackReferralEncountersObjectPromise = FacilityToFacilityBackReferralEncountersModel.get_specific_facility_to_facility_back_referral_encounters(ColumnName,value_);
		   
		   
		   myFacilityToFacilityBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_facility_to_facility_back_referral_encounters_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myFacilityToFacilityBackReferralEncountersObjectPromise = FacilityToFacilityBackReferralEncountersModel.batch_facility_to_facility_back_referral_encounters_update(jsonObject_);
		   
		   
		   myFacilityToFacilityBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_facility_to_facility_back_referral_encounters_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      
        
		var myFacilityToFacilityBackReferralEncountersObjectPromise = FacilityToFacilityBackReferralEncountersModel.individual_facility_to_facility_back_referral_encounters_update(ColumnName,value_,jsonObject_);
		   
		   
		   myFacilityToFacilityBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_facility_to_facility_back_referral_encounters_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myFacilityToFacilityBackReferralEncountersObjectPromise = FacilityToFacilityBackReferralEncountersModel.delete_facility_to_facility_back_referral_encounters_record(ColumnName,value_);
		    
		   
		   myFacilityToFacilityBackReferralEncountersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}