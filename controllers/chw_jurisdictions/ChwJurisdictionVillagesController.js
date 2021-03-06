/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the chw_jurisdiction_villages's controller class.
It receives calls from the "ChwJurisdictionVillagesRoutes" class and
passes the calls down to the "ChwJurisdictionVillagesModel" class

*/


const ModelMaster=require('../../models/ModelMaster.js');
const ChwJurisdictionVillagesModel = require('../../models/chw_jurisdictions/ChwJurisdictionVillagesModel.js');




module.exports = class ChwJurisdictionVillagesController{
    constructor(){

    }
	
	
	
   static insert_chw_jurisdiction_villages(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myChwJurisdictionVillagesObjectPromise = ChwJurisdictionVillagesModel.insert_chw_jurisdiction_villages(jsonObject_);
		  
		   
		   myChwJurisdictionVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   static get_all_chw_jurisdiction_villages(){
	   return new Promise(function(resolve, reject) {  
       
        var myChwJurisdictionVillagesObjectPromise = ChwJurisdictionVillagesModel.get_all_chw_jurisdiction_villages();
		   
		   
		   myChwJurisdictionVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	static inner_join_villages_with_chw_jurisdiction_villages(SearchValue){
	   return new Promise(function(resolve, reject) {  
          var TableOne="villages";
		  var TableTwo="chw_jurisdiction_villages";
		  var JoiningKey="VillageId";
		  var SearchColumn="UserId";
		   
		   
		   
          var myModelMasterPromise = ModelMaster.two_table_inner_join(TableOne,TableTwo,JoiningKey,SearchColumn,SearchValue);
		   
		   
		   myModelMasterPromise.then(function(result) {
           
		   var object_response={result:result};
           resolve(object_response);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
			
	
	
	
	
	
	
	
   static get_specific_chw_jurisdiction_villages(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myChwJurisdictionVillagesObjectPromise = ChwJurisdictionVillagesModel.get_specific_chw_jurisdiction_villages(ColumnName,value_);
		   
		   
		   myChwJurisdictionVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_chw_jurisdiction_villages_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myChwJurisdictionVillagesObjectPromise = ChwJurisdictionVillagesModel.batch_chw_jurisdiction_villages_update(jsonObject_);
		   
		   
		   myChwJurisdictionVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_chw_jurisdiction_villages_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myChwJurisdictionVillagesObjectPromise = ChwJurisdictionVillagesModel.individual_chw_jurisdiction_villages_update(ColumnName,value_,jsonObject_);
		   
		   
		   myChwJurisdictionVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_chw_jurisdiction_villages_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myChwJurisdictionVillagesObjectPromise = ChwJurisdictionVillagesModel.delete_chw_jurisdiction_villages_record(ColumnName,value_);
		    
		   
		   myChwJurisdictionVillagesObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}