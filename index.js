/*SON/2018-11-06 00:29 - DEVELOPMENT

This is the system's entry point.It creates
the database connection and port binding 
then initializes all the route files.

*/



const mysql = require('mysql');
const express = require('express');
const app = express();
const path =require("path");
var dbcredentials;
var port = process.env.PORT || 5000;


    dbcredentials={
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DATABASE,
        insecureAuth : true
    }


app.use(express.static('public'));

var con;
app.use((req,res,next)=>{
    con = mysql.createConnection(dbcredentials);
    con.on('error',(err) =>{
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
            console.log(err);                        
        } else {                                      
            //throw err;                                  
        }
    });
    console.log("Connection established");

    next();
});




app.use(require('./routes/location_management/RegionsRoutes.js'));
app.use(require('./routes/location_management/DistrictsRoutes.js'));
app.use(require('./routes/location_management/CouncilsRoutes.js'));
app.use(require('./routes/location_management/WardsRoutes.js'));
app.use(require('./routes/location_management/VillagesRoutes.js'));


app.use(require('./routes/users_management/UsersRoutes.js'));
app.use(require('./routes/users_management/VillageExecutiveOfficersRoutes.js'));
app.use(require('./routes/users_management/RolesRoutes.js'));
app.use(require('./routes/users_management/UserRolesRoutes.js'));


app.use(require('./routes/team_management/TeamsRoutes.js'));
app.use(require('./routes/team_management/TeamMembersRoutes.js'));
app.use(require('./routes/team_management/TeamLeadTypesRoutes.js'));
app.use(require('./routes/team_management/TeamLeadsRoutes.js'));


app.use(require('./routes/chw_jurisdictions/ChwJurisdictionVillagesRoutes.js'));
app.use(require('./routes/chw_jurisdictions/ChwJurisdictionFacilitiesRoutes.js'));


app.use(require('./routes/facility_management/FacilityTypesRoutes.js'));
app.use(require('./routes/facility_management/FacilitiesRoutes.js'));
app.use(require('./routes/facility_management/FacilityStaffRoutes.js'));


app.use(require('./routes/client_management/ClientRegistrationRoutes.js'));
app.use(require('./routes/client_management/ClientInitialMeetUpRoutes.js'));
app.use(require('./routes/client_management/ClientEncountersRoutes.js'));


app.use(require('./routes/referral_management/ReferralServiceTypesRoutes.js'));
app.use(require('./routes/referral_management/DangerSignsRoutes.js'));
app.use(require('./routes/referral_management/ReferralDangerSignsRoutes.js'));
app.use(require('./routes/referral_management/ReferralsRoutes.js'));


app.use(require('./routes/back_referrals/BackReferralsRoutes.js'));
app.use(require('./routes/back_referrals/BackReferralsRoutes.js'));
app.use(require('./routes/back_referrals/BackReferralRequestInformationTypesRoutes.js'));
app.use(require('./routes/back_referrals/BackReferralRequestInformationRoutes.js'));
app.use(require('./routes/back_referrals/BackReferralEncountersRoutes.js'));
app.use(require('./routes/back_referrals/BackReferralProgressInformationTypesRoutes.js'));
app.use(require('./routes/back_referrals/BackReferralProgressInformationRoutes.js'));


app.use(require('./routes/facility_to_facility_referrals/FacilityToFacilityReferralsRoutes.js'));
app.use(require('./routes/facility_to_facility_referrals/FacilityToFacilityReferralInformationTypesRoutes.js'));
app.use(require('./routes/facility_to_facility_referrals/FacilityToFacilityReferralInformationRoutes.js'));
app.use(require('./routes/facility_to_facility_referrals/FacilityToFacilityBackReferralEncountersRoutes.js'));



app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
    console.log("Listening on "+port);
});