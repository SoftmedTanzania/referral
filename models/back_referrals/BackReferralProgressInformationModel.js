/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the "back_referral_progress_information" table's model
class.It receives any CRUD operation 
requests and hands the over to class 
ModelMaster.It creates an instance of class
ModelMaster then passes parameters to its
functions.

*/



const ModelMaster=require('../ModelMaster.js');
const TableName="back_referral_progress_information";


module.exports = class BackReferralProgressInformationModel{


    constructor(){                                                                                                                                                                                                                                                             
     
 }
	
	
	
   static insert_back_referral_progress_information(jsonObject_){
	   return new Promise(function(resolve, reject) {
	   
 	   

       var myModelMasterPromise = ModelMaster.insert(TableName,jsonObject_);
		   
		   
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
		   
	   })
 
    }		
	
	

	
	
	
   static get_all_back_referral_progress_information(){
	   return new Promise(function(resolve, reject) {
        

        var myModelMasterPromise = ModelMaster.selectAll(TableName);
		 myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		
     })
    }	
	
	
	
	
	
	
	
	
	
   static get_specific_back_referral_progress_information(ColumnName,value_){
	   return new Promise(function(resolve, reject) {
        


        var myModelMasterPromise = ModelMaster.selectSpecific(TableName,ColumnName,value_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
     })
    }		
	
	
	
	
   static batch_back_referral_progress_information_update(jsonObject_){
	   return new Promise(function(resolve, reject) {
        


        var myModelMasterPromise = ModelMaster.batch_update(TableName,jsonObject_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
	
   static individual_back_referral_progress_information_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) {
        

        
		var myModelMasterPromise = ModelMaster.individual_update(TableName,jsonObject_,ColumnName,value_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
   static delete_back_referral_progress_information_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) {
        

        
		var myModelMasterPromise = ModelMaster.delete(TableName,ColumnName,value_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
	
}