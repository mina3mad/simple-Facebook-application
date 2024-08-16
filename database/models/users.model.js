import { DataTypes } from "sequelize";
import sequelize from "../connection.js";
import postModule from "./posts.model.js";
import commentModule from "./comments.model.js";


//user model
const userModule =sequelize.define(
    'User',
    {
        userName: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        loginStatus:{
            type:DataTypes.BOOLEAN,
            defaultValue:false,
        }
    },
    
);

//relationship between user and posts -->user can has many posts
userModule.hasMany(postModule,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
}) 
postModule.belongsTo(userModule)


//relationship between user and comments
userModule.hasMany(commentModule,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
}) 
commentModule.belongsTo(userModule)


export default userModule