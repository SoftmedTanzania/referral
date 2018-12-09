/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_request_information's controller class.
It receives calls from the "BackReferralRequestInformationRoutes" class and
passes the calls down to the "BackReferralRequestInformationModel" class

*/



const BackReferralRequestInformationModel = require('../../models/back_referrals/BackReferralRequestInformationModel.js');




module.exports = class BackReferralRequestInformationController{
    constructor(){

    }
	
	
	
   insert_back_referral_request_information(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myBackReferralRequestInformationObject=new BackReferralRequestInformationModel();
     var myBackReferralRequestInformationObjectPromise = myBackReferralRequestInformationObject.insert_back_referral_request_information(jsonObject_);
		  
		   
		   myBackReferralRequestInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_back_referral_request_information(){
	   return new Promise(function(resolve, reject) {  
        const  myBackReferralRequestInformationObject=new BackReferralRequestInformationModel();
        var myBackReferralRequestInformationObjectPromise = myBackReferralRequestInformationObject.get_all_back_referral_request_information();
		   
		   
		   myBackReferralRequestInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_back_referral_request_information(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myBackReferralRequestInformationObject=new BackReferralRequestInformationModel();
        var myBackReferralRequestInformationObjectPromise = myBackReferralRequestInformationObject.get_specific_back_referral_request_information(ColumnName,value_);
		   
		   
		   myBackReferralRequestInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_back_referral_request_information_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myBackReferralRequestInformationObject=new BackReferralRequestInformationModel();
        
		var myBackReferralRequestInformationObjectPromise = myBackReferralRequestInformationObject.batch_back_referral_request_information_update(jsonObject_);
		   
		   
		   myBackReferralRequestInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_back_referral_request_information_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      const  myBackReferralRequestInformationObject=new BackReferralRequestInformationModel();
        
		var myBackReferralRequestInformationObjectPromise = myBackReferralRequestInformationObject.individual_back_referral_request_information_update(ColumnName,value_);
		   
		   
		   myBackReferralRequestInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_back_referral_request_information_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myBackReferralRequestInformationObject=new BackReferralRequestInformationModel();
        
		var myBackReferralRequestInformationObjectPromise = myBackReferralRequestInformationObject.delete_back_referral_request_information_record(ColumnName,value_);
		    
		   
		   myBackReferralRequestInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}