/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the users's controller class.
It receives calls from the "UsersRoutes" class and
passes the calls down to the "UsersModel" class

*/


const ModelMaster=require('../../models/ModelMaster.js');
const UsersModel = require('../../models/users_management/UsersModel.js');
const crypto = require('crypto');
var pbkdf2 = require('pbkdf2');




module.exports = class UsersController{
    constructor(){

    }
	
	
	
	/*my_hash_function(password, salt){
		
          var hash = crypto.createHmac('sha512', salt); 
          hash.update(password);
          var value = hash.digest('hex');
          return {
             salt:salt,
             encrypted_Password:value
          };
    }*/
	
	
	
   static insert_users(jsonObject_){
	  return new Promise(function(resolve, reject) { 
		 
		 //var userAlreadyRegisteredResult;
		 var TableName="users";
		 var ColumnName="JobRefNo";
		 var value_=jsonObject_.JobRefNo;
		 
		 var myModelMasterPromise = ModelMaster.selectSpecific(TableName,ColumnName,value_);
		  
		  myModelMasterPromise.then(function(userAlreadyRegisteredResult) {
        
          if(userAlreadyRegisteredResult.length === 0){
		
		 var salt = crypto.randomBytes(128).toString('base64');
		 var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
		 
	 	
	
		 hash.update(jsonObject_.Password);
	     var encrypted_Password = hash.digest('hex');
		 
	     delete jsonObject_["Password"]; 
	     jsonObject_["EncryptedPassword"] = encrypted_Password;
	     jsonObject_["Salt"] = salt;
	   
	   
	 
     var myUsersObjectPromise = UsersModel.insert_users(jsonObject_); 
     
		  
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
			  
		  }else{var myResponse="A user already exists with this Job Reference Number";
			    resolve(myResponse);
			   }
			  
			   }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	static user_login(jsonObject_){
	   return new Promise(function(resolve, reject) { 
		   
		   
	     var TableOne="wards";
		 var TableTwo="users";
		 var JoiningKey="WardId";
		 var SearchColumn="JobRefNo";
		 var SearchValue=jsonObject_.AttemptedJobRefNo;
		   
		   
	    
		var myModelMasterPromise = ModelMaster.two_table_inner_join(TableOne,TableTwo,JoiningKey,SearchColumn,SearchValue); 
		   
		   
		myModelMasterPromise.then(function(userExistsResult) {
			
			
			
			
			if(userExistsResult.length === 0){
			  
			  var error_msg="There is no user account by this Job Reference Number";
			  var response_object = {error: true, error_msg:error_msg};
			  resolve(response_object);
			
			}else{
				 
		         // var loginResponse = [];
		          var hash = crypto.createHmac('sha512', userExistsResult[0].Salt); /** Hashing algorithm sha512 */
		          hash.update(jsonObject_.AttemptedPassword);
	              var Attempted_encrypted_Password = hash.digest('hex');
				
				  if(Attempted_encrypted_Password === userExistsResult[0].EncryptedPassword)
				  {
					  
					  var response_object = {
                                    error: false, UserId: userExistsResult[0].UserId, RoleId: userExistsResult[0].RoleId, FirstName: userExistsResult[0].FirstName, MiddleName: userExistsResult[0].MiddleName, SurName: userExistsResult[0].SurName, JobRefNo: userExistsResult[0].JobRefNo, WardId: userExistsResult[0].WardId, WardName: userExistsResult[0].WardName, WardRefNo: userExistsResult[0].WardRefNo 
                                    };
					  
				   
				  }else{
					  
					   var error_msg="Login failed";
					   var response_object = {error: true, error_msg:error_msg};
				       
					  
				  }
				
				
				  //loginResponse.push(response_object);
				  resolve(response_object);
				
			     }
			
			}, function(err) {
           reject(err);
           })
		   
	 })
    }	
  
	
	
	
	static get_all_users(){
	   return new Promise(function(resolve, reject) {  
        
        var myUsersObjectPromise = UsersModel.get_all_users();
		   
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	

	
	
	
	
   static get_specific_users(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
         
        var myUsersObjectPromise = UsersModel.get_specific_users(ColumnName,value_);
		   
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_users_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myUsersObjectPromise = UsersModel.batch_users_update(jsonObject_);
		   
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_users_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myUsersObjectPromise = UsersModel.individual_users_update(ColumnName,value_,jsonObject_);
		   
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_users_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myUsersObjectPromise = UsersModel.delete_users_record(ColumnName,value_);
		    
		   
		   myUsersObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }
	
	
	
	

	
	
		
	
	
}