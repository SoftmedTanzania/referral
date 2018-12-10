/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referrals's controller class.
It receives calls from the "BackReferralsRoutes" class and
passes the calls down to the "BackReferralsModel" class

*/



const BackReferralsModel = require('../../models/back_referrals/BackReferralsModel.js');




module.exports = class BackReferralsController{
    constructor(){

    }
	
	
	
   static insert_back_referrals(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myBackReferralsObjectPromise = BackReferralsModel.insert_back_referrals(jsonObject_);
		  
		   
		   myBackReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_back_referrals(){
	   return new Promise(function(resolve, reject) {  
        
        var myBackReferralsObjectPromise = BackReferralsModel.get_all_back_referrals();
		   
		   
		   myBackReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static get_specific_back_referrals(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       
        var myBackReferralsObjectPromise = BackReferralsModel.get_specific_back_referrals(ColumnName,value_);
		   
		   
		   myBackReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_back_referrals_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        
        
		var myBackReferralsObjectPromise = BackReferralsModel.batch_back_referrals_update(jsonObject_);
		   
		   
		   myBackReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_back_referrals_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      
        
		var myBackReferralsObjectPromise = BackReferralsModel.individual_back_referrals_update(ColumnName,value_,jsonObject_);
		   
		   
		   myBackReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_back_referrals_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myBackReferralsObjectPromise = BackReferralsModel.delete_back_referrals_record(ColumnName,value_);
		    
		   
		   myBackReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}