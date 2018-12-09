/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the referral_danger_signs's controller class.
It receives calls from the "ReferralDangerSignsRoutes" class and
passes the calls down to the "ReferralDangerSignsModel" class

*/



const ReferralDangerSignsModel = require('../../models/referral_management/ReferralDangerSignsModel.js');




module.exports = class ReferralDangerSignsController{
    constructor(){

    }
	
	
	
   insert_referral_danger_signs(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myReferralDangerSignsObject=new ReferralDangerSignsModel();
     var myReferralDangerSignsObjectPromise = myReferralDangerSignsObject.insert_referral_danger_signs(jsonObject_);
		  
		   
		   myReferralDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_referral_danger_signs(){
	   return new Promise(function(resolve, reject) {  
        const  myReferralDangerSignsObject=new ReferralDangerSignsModel();
        var myReferralDangerSignsObjectPromise = myReferralDangerSignsObject.get_all_referral_danger_signs();
		   
		   
		   myReferralDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_referral_danger_signs(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
       const  myReferralDangerSignsObject=new ReferralDangerSignsModel();
        var myReferralDangerSignsObjectPromise = myReferralDangerSignsObject.get_specific_referral_danger_signs(ColumnName,value_);
		   
		   
		   myReferralDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_referral_danger_signs_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
        const  myReferralDangerSignsObject=new ReferralDangerSignsModel();
        
		var myReferralDangerSignsObjectPromise = myReferralDangerSignsObject.batch_referral_danger_signs_update(jsonObject_);
		   
		   
		   myReferralDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_referral_danger_signs_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
      const  myReferralDangerSignsObject=new ReferralDangerSignsModel();
        
		var myReferralDangerSignsObjectPromise = myReferralDangerSignsObject.individual_referral_danger_signs_update(ColumnName,value_);
		   
		   
		   myReferralDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_referral_danger_signs_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myReferralDangerSignsObject=new ReferralDangerSignsModel();
        
		var myReferralDangerSignsObjectPromise = myReferralDangerSignsObject.delete_referral_danger_signs_record(ColumnName,value_);
		    
		   
		   myReferralDangerSignsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}