/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_progress_information_types's controller class.
It receives calls from the "BackReferralProgressInformationTypesRoutes" class and
passes the calls down to the "BackReferralProgressInformationTypesModel" class

*/



const BackReferralProgressInformationTypesModel = require('../../models/back_referrals/BackReferralProgressInformationTypesModel.js');




module.exports = class BackReferralProgressInformationTypesController{
    constructor(){

    }
	
	
	
   insert_back_referral_progress_information_types(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myBackReferralProgressInformationTypesObject=new BackReferralProgressInformationTypesModel();
     var myBackReferralProgressInformationTypesObjectPromise = myBackReferralProgressInformationTypesObject.insert_back_referral_progress_information_types(jsonObject_);
		  
		   
		   myBackReferralProgressInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_back_referral_progress_information_types(){
	   return new Promise(function(resolve, reject) {  
        const  myBackReferralProgressInformationTypesObject=new BackReferralProgressInformationTypesModel();
        var myBackReferralProgressInformationTypesObjectPromise = myBackReferralProgressInformationTypesObject.get_all_back_referral_progress_information_types();
		   
		   
		   myBackReferralProgressInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_back_referral_progress_information_types(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myBackReferralProgressInformationTypesObject=new BackReferralProgressInformationTypesModel();
        var myBackReferralProgressInformationTypesObjectPromise = myBackReferralProgressInformationTypesObject.get_specific_back_referral_progress_information_types(ColumnName,value_);
		   
		   
		   myBackReferralProgressInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_back_referral_progress_information_types_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myBackReferralProgressInformationTypesObject=new BackReferralProgressInformationTypesModel();
        
		var myBackReferralProgressInformationTypesObjectPromise = myBackReferralProgressInformationTypesObject.batch_back_referral_progress_information_types_update(jsonObject_);
		   
		   
		   myBackReferralProgressInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_back_referral_progress_information_types_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      const  myBackReferralProgressInformationTypesObject=new BackReferralProgressInformationTypesModel();
        
		var myBackReferralProgressInformationTypesObjectPromise = myBackReferralProgressInformationTypesObject.individual_back_referral_progress_information_types_update(ColumnName,value_);
		   
		   
		   myBackReferralProgressInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_back_referral_progress_information_types_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myBackReferralProgressInformationTypesObject=new BackReferralProgressInformationTypesModel();
        
		var myBackReferralProgressInformationTypesObjectPromise = myBackReferralProgressInformationTypesObject.delete_back_referral_progress_information_types_record(ColumnName,value_);
		    
		   
		   myBackReferralProgressInformationTypesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}