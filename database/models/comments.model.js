import { DataTypes } from "sequelize";
import sequelize from "../connection.js";

const commentModule =sequelize.define(
    'Comment',
    {
        content: {
        type: DataTypes.STRING,
        allowNull:false,
        },
    },

);
export default commentModule