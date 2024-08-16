import { Sequelize } from "sequelize";

const sequelize = new Sequelize('bakfxefpc6cliekch76x', 'uvkqr54qcerj7k4j', 'uSMO2q2xSB49EzQ3jMtt', {
    host: 'bakfxefpc6cliekch76x-mysql.services.clever-cloud.com',
    dialect:"mysql"
    });
    sequelize.authenticate().then(()=>{
        console.log("database connected");
        
    }).catch((error)=>{
        console.log(error);
        
    })
export default sequelize