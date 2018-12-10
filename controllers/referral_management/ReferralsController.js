/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the referrals's controller class.
It receives calls from the "ReferralsRoutes" class and
passes the calls down to the "ReferralsModel" class

*/



const ReferralsModel = require('../../models/referral_management/ReferralsModel.js');




module.exports = class ReferralsController{
    constructor(){

    }
	
	
	
   static insert_referrals(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myReferralsObjectPromise = ReferralsModel.insert_referrals(jsonObject_);
		  
		   
		   myReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_referrals(){
	   return new Promise(function(resolve, reject) {  
        
        var myReferralsObjectPromise = ReferralsModel.get_all_referrals();
		   
		   
		   myReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_referrals(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myReferralsObjectPromise = ReferralsModel.get_specific_referrals(ColumnName,value_);
		   
		   
		   myReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_referrals_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myReferralsObjectPromise = ReferralsModel.batch_referrals_update(jsonObject_);
		   
		   
		   myReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_referrals_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      
        
		var myReferralsObjectPromise = ReferralsModel.individual_referrals_update(ColumnName,value_,jsonObject_);
		   
		   
		   myReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_referrals_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myReferralsObjectPromise = ReferralsModel.delete_referrals_record(ColumnName,value_);
		    
		   
		   myReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}