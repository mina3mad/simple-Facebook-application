import { DataTypes } from "sequelize";
import sequelize from "../connection.js";
import commentModule from "./comments.model.js";


const postModule =sequelize.define(
    'Post',
    {
        title: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        content: {
        type: DataTypes.STRING,
        allowNull:false,
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },

);


//relationship between posts and comments
postModule.hasMany(commentModule,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
commentModule.belongsTo(postModule)

export default postModule