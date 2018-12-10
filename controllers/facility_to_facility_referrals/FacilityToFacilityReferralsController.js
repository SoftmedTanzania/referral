/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the facility_to_facility_referrals's controller class.
It receives calls from the "FacilityToFacilityReferralsRoutes" class and
passes the calls down to the "FacilityToFacilityReferralsModel" class

*/



const FacilityToFacilityReferralsModel = require('../../models/facility_to_facility_referrals/FacilityToFacilityReferralsModel.js');




module.exports = class FacilityToFacilityReferralsController{
    constructor(){

    }
	
	
	
   static insert_facility_to_facility_referrals(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myFacilityToFacilityReferralsObjectPromise = FacilityToFacilityReferralsModel.insert_facility_to_facility_referrals(jsonObject_);
		  
		   
		   myFacilityToFacilityReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_facility_to_facility_referrals(){
	   return new Promise(function(resolve, reject) {  
        
        var myFacilityToFacilityReferralsObjectPromise = FacilityToFacilityReferralsModel.get_all_facility_to_facility_referrals();
		   
		   
		   myFacilityToFacilityReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_facility_to_facility_referrals(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myFacilityToFacilityReferralsObjectPromise = FacilityToFacilityReferralsModel.get_specific_facility_to_facility_referrals(ColumnName,value_);
		   
		   
		   myFacilityToFacilityReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_facility_to_facility_referrals_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myFacilityToFacilityReferralsObjectPromise = FacilityToFacilityReferralsModel.batch_facility_to_facility_referrals_update(jsonObject_);
		   
		   
		   myFacilityToFacilityReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_facility_to_facility_referrals_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      
        
		var myFacilityToFacilityReferralsObjectPromise = FacilityToFacilityReferralsModel.individual_facility_to_facility_referrals_update(ColumnName,value_,jsonObject_);
		   
		   
		   myFacilityToFacilityReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_facility_to_facility_referrals_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myFacilityToFacilityReferralsObjectPromise = FacilityToFacilityReferralsModel.delete_facility_to_facility_referrals_record(ColumnName,value_);
		    
		   
		   myFacilityToFacilityReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}