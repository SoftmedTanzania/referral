/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_request_information_types's controller class.
It receives calls from the "BackReferralRequestInformationRoutes" class and
passes the calls down to the "BackReferralRequestInformationModel" class

*/



const BackReferralRequestInformationTypesModel = require('../../models/back_referrals/BackReferralRequestInformationModel.js');




module.exports = class BackReferralRequestInformationTypesController{
    constructor(){

    }
	
	
	
   insert_back_referral_request_information_types(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myBackReferralRequestInformationTypesObject=new BackReferralRequestInformationTypesModel();
     var myBackReferralRequestInformationTypesObjectPromise = myBackReferralRequestInformationTypesObject.insert_back_referral_request_information_types(jsonObject_);
		  
		   
		   myBackReferralRequestInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_back_referral_request_information_types(){
	   return new Promise(function(resolve, reject) {  
        const  myBackReferralRequestInformationTypesObject=new BackReferralRequestInformationTypesModel();
        var myBackReferralRequestInformationTypesObjectPromise = myBackReferralRequestInformationTypesObject.get_all_back_referral_request_information_types();
		   
		   
		   myBackReferralRequestInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_back_referral_request_information_types(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myBackReferralRequestInformationTypesObject=new BackReferralRequestInformationTypesModel();
        var myBackReferralRequestInformationTypesObjectPromise = myBackReferralRequestInformationTypesObject.get_specific_back_referral_request_information_types(ColumnName,value_);
		   
		   
		   myBackReferralRequestInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_back_referral_request_information_types_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myBackReferralRequestInformationTypesObject=new BackReferralRequestInformationTypesModel();
        
		var myBackReferralRequestInformationTypesObjectPromise = myBackReferralRequestInformationTypesObject.batch_back_referral_request_information_types_update(jsonObject_);
		   
		   
		   myBackReferralRequestInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_back_referral_request_information_types_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      const  myBackReferralRequestInformationTypesObject=new BackReferralRequestInformationTypesModel();
        
		var myBackReferralRequestInformationTypesObjectPromise = myBackReferralRequestInformationTypesObject.individual_back_referral_request_information_types_update(ColumnName,value_);
		   
		   
		   myBackReferralRequestInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_back_referral_request_information_types_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myBackReferralRequestInformationTypesObject=new BackReferralRequestInformationTypesModel();
        
		var myBackReferralRequestInformationTypesObjectPromise = myBackReferralRequestInformationTypesObject.delete_back_referral_request_information_types_record(ColumnName,value_);
		    
		   
		   myBackReferralRequestInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}