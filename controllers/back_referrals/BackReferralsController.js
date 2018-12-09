/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referrals's controller class.
It receives calls from the "BackReferralsRoutes" class and
passes the calls down to the "BackReferralsModel" class

*/



const BackReferralsModel = require('../../models/back_referrals/BackReferralsModel.js');




module.exports = class BackReferralsController{
    constructor(){

    }
	
	
	
   insert_back_referrals(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myBackReferralsObject=new BackReferralsModel();
     var myBackReferralsObjectPromise = myBackReferralsObject.insert_back_referrals(jsonObject_);
		  
		   
		   myBackReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_back_referrals(){
	   return new Promise(function(resolve, reject) {  
        const  myBackReferralsObject=new BackReferralsModel();
        var myBackReferralsObjectPromise = myBackReferralsObject.get_all_back_referrals();
		   
		   
		   myBackReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_back_referrals(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myBackReferralsObject=new BackReferralsModel();
        var myBackReferralsObjectPromise = myBackReferralsObject.get_specific_back_referrals(ColumnName,value_);
		   
		   
		   myBackReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_back_referrals_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myBackReferralsObject=new BackReferralsModel();
        
		var myBackReferralsObjectPromise = myBackReferralsObject.batch_back_referrals_update(jsonObject_);
		   
		   
		   myBackReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_back_referrals_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      const  myBackReferralsObject=new BackReferralsModel();
        
		var myBackReferralsObjectPromise = myBackReferralsObject.individual_back_referrals_update(ColumnName,value_,jsonObject_);
		   
		   
		   myBackReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_back_referrals_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myBackReferralsObject=new BackReferralsModel();
        
		var myBackReferralsObjectPromise = myBackReferralsObject.delete_back_referrals_record(ColumnName,value_);
		    
		   
		   myBackReferralsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}