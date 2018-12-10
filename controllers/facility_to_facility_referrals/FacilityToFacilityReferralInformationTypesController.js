/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facility_to_facility_referral_information_types's controller class.
It receives calls from the "FacilityToFacilityReferralInformationTypesRoutes" class and
passes the calls down to the "FacilityToFacilityReferralInformationTypesModel" class

*/



const FacilityToFacilityReferralInformationTypesModel = require('../../models/facility_to_facility_referrals/FacilityToFacilityReferralInformationTypesModel.js');




module.exports = class FacilityToFacilityReferralInformationTypesController{
    constructor(){

    }
	
	
	
   static insert_facility_to_facility_referral_information_types(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myFacilityToFacilityReferralInformationTypesObjectPromise = FacilityToFacilityReferralInformationTypesModel.insert_facility_to_facility_referral_information_types(jsonObject_);
		  
		   
		   myFacilityToFacilityReferralInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_facility_to_facility_referral_information_types(){
	   return new Promise(function(resolve, reject) {  
        
        var myFacilityToFacilityReferralInformationTypesObjectPromise = FacilityToFacilityReferralInformationTypesModel.get_all_facility_to_facility_referral_information_types();
		   
		   
		   myFacilityToFacilityReferralInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_facility_to_facility_referral_information_types(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myFacilityToFacilityReferralInformationTypesObjectPromise = FacilityToFacilityReferralInformationTypesModel.get_specific_facility_to_facility_referral_information_types(ColumnName,value_);
		   
		   
		   myFacilityToFacilityReferralInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_facility_to_facility_referral_information_types_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myFacilityToFacilityReferralInformationTypesObjectPromise = FacilityToFacilityReferralInformationTypesModel.batch_facility_to_facility_referral_information_types_update(jsonObject_);
		   
		   
		   myFacilityToFacilityReferralInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_facility_to_facility_referral_information_types_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      
        
		var myFacilityToFacilityReferralInformationTypesObjectPromise = FacilityToFacilityReferralInformationTypesModel.individual_facility_to_facility_referral_information_types_update(ColumnName,value_,jsonObject_);
		   
		   
		   myFacilityToFacilityReferralInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_facility_to_facility_referral_information_types_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myFacilityToFacilityReferralInformationTypesObjectPromise = FacilityToFacilityReferralInformationTypesModel.delete_facility_to_facility_referral_information_types_record(ColumnName,value_);
		    
		   
		   myFacilityToFacilityReferralInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}