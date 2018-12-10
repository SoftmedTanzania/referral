/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the referral_danger_signs's controller class.
It receives calls from the "ReferralDangerSignsRoutes" class and
passes the calls down to the "ReferralDangerSignsModel" class

*/



const ReferralDangerSignsModel = require('../../models/referral_management/ReferralDangerSignsModel.js');




module.exports = class ReferralDangerSignsController{
    constructor(){

    }
	
	
	
   static insert_referral_danger_signs(jsonObject_){
	 return new Promise(function(resolve, reject) {  
    
     var myReferralDangerSignsObjectPromise = ReferralDangerSignsModel.insert_referral_danger_signs(jsonObject_);
		  
		   
		   myReferralDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_referral_danger_signs(){
	   return new Promise(function(resolve, reject) {  
       
        var myReferralDangerSignsObjectPromise = ReferralDangerSignsModel.get_all_referral_danger_signs();
		   
		   
		   myReferralDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_referral_danger_signs(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myReferralDangerSignsObjectPromise = ReferralDangerSignsModel.get_specific_referral_danger_signs(ColumnName,value_);
		   
		   
		   myReferralDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_referral_danger_signs_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myReferralDangerSignsObjectPromise = ReferralDangerSignsModel.batch_referral_danger_signs_update(jsonObject_);
		   
		   
		   myReferralDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_referral_danger_signs_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      
        
		var myReferralDangerSignsObjectPromise = ReferralDangerSignsModel.individual_referral_danger_signs_update(ColumnName,value_,jsonObject_);
		   
		   
		   myReferralDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_referral_danger_signs_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myReferralDangerSignsObjectPromise = ReferralDangerSignsModel.delete_referral_danger_signs_record(ColumnName,value_);
		    
		   
		   myReferralDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}