/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the back_referral_progress_information's controller class.
It receives calls from the "BackReferralProgressInformationRoutes" class and
passes the calls down to the "BackReferralProgressInformationModel" class

*/



const BackReferralProgressInformationModel = require('../../models/back_referrals/BackReferralProgressInformationModel.js');




module.exports = class BackReferralProgressInformationController{
    constructor(){

    }
	
	
	
   insert_back_referral_progress_information(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myBackReferralProgressInformationObject=new BackReferralProgressInformationModel();
     var myBackReferralProgressInformationObjectPromise = myBackReferralProgressInformationObject.insert_back_referral_progress_information(jsonObject_);
		  
		   
		   myBackReferralProgressInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_back_referral_progress_information(){
	   return new Promise(function(resolve, reject) {  
        const  myBackReferralProgressInformationObject=new BackReferralProgressInformationModel();
        var myBackReferralProgressInformationObjectPromise = myBackReferralProgressInformationObject.get_all_back_referral_progress_information();
		   
		   
		   myBackReferralProgressInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_back_referral_progress_information(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myBackReferralProgressInformationObject=new BackReferralProgressInformationModel();
        var myBackReferralProgressInformationObjectPromise = myBackReferralProgressInformationObject.get_specific_back_referral_progress_information(ColumnName,value_);
		   
		   
		   myBackReferralProgressInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_back_referral_progress_information_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myBackReferralProgressInformationObject=new BackReferralProgressInformationModel();
        
		var myBackReferralProgressInformationObjectPromise = myBackReferralProgressInformationObject.batch_back_referral_progress_information_update(jsonObject_);
		   
		   
		   myBackReferralProgressInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_back_referral_progress_information_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      const  myBackReferralProgressInformationObject=new BackReferralProgressInformationModel();
        
		var myBackReferralProgressInformationObjectPromise = myBackReferralProgressInformationObject.individual_back_referral_progress_information_update(ColumnName,value_,jsonObject_);
		   
		   
		   myBackReferralProgressInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_back_referral_progress_information_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myBackReferralProgressInformationObject=new BackReferralProgressInformationModel();
        
		var myBackReferralProgressInformationObjectPromise = myBackReferralProgressInformationObject.delete_back_referral_progress_information_record(ColumnName,value_);
		    
		   
		   myBackReferralProgressInformationObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}