/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facility_to_facility_referral_information's controller class.
It receives calls from the "FacilityToFacilityReferralInformationRoutes" class and
passes the calls down to the "FacilityToFacilityReferralInformationModel" class

*/



const FacilityToFacilityReferralInformationModel = require('../../models/facility_to_facility_referrals/FacilityToFacilityReferralInformationModel.js');




module.exports = class FacilityToFacilityReferralInformationController{
    constructor(){

    }
	
	
	
   static insert_facility_to_facility_referral_information(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myFacilityToFacilityReferralInformationObjectPromise = FacilityToFacilityReferralInformationModel.insert_facility_to_facility_referral_information(jsonObject_);
		  
		   
		   myFacilityToFacilityReferralInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_facility_to_facility_referral_information(){
	   return new Promise(function(resolve, reject) {  
       
        var myFacilityToFacilityReferralInformationObjectPromise = FacilityToFacilityReferralInformationModel.get_all_facility_to_facility_referral_information();
		   
		   
		   myFacilityToFacilityReferralInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_facility_to_facility_referral_information(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myFacilityToFacilityReferralInformationObjectPromise = FacilityToFacilityReferralInformationModel.get_specific_facility_to_facility_referral_information(ColumnName,value_);
		   
		   
		   myFacilityToFacilityReferralInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_facility_to_facility_referral_information_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myFacilityToFacilityReferralInformationObjectPromise = FacilityToFacilityReferralInformationModel.batch_facility_to_facility_referral_information_update(jsonObject_);
		   
		   
		   myFacilityToFacilityReferralInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_facility_to_facility_referral_information_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      
        
		var myFacilityToFacilityReferralInformationObjectPromise = FacilityToFacilityReferralInformationModel.individual_facility_to_facility_referral_information_update(ColumnName,value_,jsonObject_);
		   
		   
		   myFacilityToFacilityReferralInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_facility_to_facility_referral_information_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myFacilityToFacilityReferralInformationObjectPromise = FacilityToFacilityReferralInformationModel.delete_facility_to_facility_referral_information_record(ColumnName,value_);
		    
		   
		   myFacilityToFacilityReferralInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}