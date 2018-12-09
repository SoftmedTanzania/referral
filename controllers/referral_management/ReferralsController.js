/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the referrals's controller class.
It receives calls from the "ReferralsRoutes" class and
passes the calls down to the "ReferralsModel" class

*/



const ReferralsModel = require('../../models/referral_management/ReferralsModel.js');




module.exports = class ReferralsController{
    constructor(){

    }
	
	
	
   insert_referrals(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myReferralsObject=new ReferralsModel();
     var myReferralsObjectPromise = myReferralsObject.insert_referrals(jsonObject_);
		  
		   
		   myReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_referrals(){
	   return new Promise(function(resolve, reject) {  
        const  myReferralsObject=new ReferralsModel();
        var myReferralsObjectPromise = myReferralsObject.get_all_referrals();
		   
		   
		   myReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_referrals(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myReferralsObject=new ReferralsModel();
        var myReferralsObjectPromise = myReferralsObject.get_specific_referrals(ColumnName,value_);
		   
		   
		   myReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_referrals_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myReferralsObject=new ReferralsModel();
        
		var myReferralsObjectPromise = myReferralsObject.batch_referrals_update(jsonObject_);
		   
		   
		   myReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_referrals_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      const  myReferralsObject=new ReferralsModel();
        
		var myReferralsObjectPromise = myReferralsObject.individual_referrals_update(ColumnName,value_,jsonObject_);
		   
		   
		   myReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_referrals_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myReferralsObject=new ReferralsModel();
        
		var myReferralsObjectPromise = myReferralsObject.delete_referrals_record(ColumnName,value_);
		    
		   
		   myReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}