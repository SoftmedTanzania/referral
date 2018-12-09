/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the "regions" table's model
class.It receives any CRUD operation 
requests and hands the over to class 
ModelMaster.It creates an instance of class
ModelMaster then passes parameters to its
functions.

*/



const ModelMaster=require('../ModelMaster.js');
const TableName="regions";


module.exports = class RegionsModel{


    constructor(){                                                                                                                                                                                                                                                             
     
 }
	
	
	
   insert_regions(jsonObject_){
	   return new Promise(function(resolve, reject) {
	   
 	   const  myModelMaster=new ModelMaster();

       var myModelMasterPromise = myModelMaster.insert(TableName,jsonObject_);
		   
		   
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
		   
	   })
 
    }		
	
	

	
	
	
   get_all_regions(){
	   return new Promise(function(resolve, reject) {
        const  myModelMaster=new ModelMaster();

        var myModelMasterPromise = myModelMaster.selectAll(TableName);
		 myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		
     })
    }	
	
	
	
	
	
	
	
	
	
   get_specific_regions(ColumnName,value_){
	   return new Promise(function(resolve, reject) {
        const  myModelMaster=new ModelMaster();


        var myModelMasterPromise = myModelMaster.selectSpecific(TableName,ColumnName,value_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
     })
    }		
	
	
	
	
   batch_regions_update(jsonObject_){
	   return new Promise(function(resolve, reject) {
        const  myModelMaster=new ModelMaster();


        var myModelMasterPromise = myModelMaster.batch_update(TableName,jsonObject_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
	
   individual_regions_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) {
        const  myModelMaster=new ModelMaster();

        
		var myModelMasterPromise = myModelMaster.individual_update(TableName,jsonObject_,ColumnName,value_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
   delete_regions_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) {
        const  myModelMaster=new ModelMaster();

        
		var myModelMasterPromise = myModelMaster.delete(TableName,ColumnName,value_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
	
}