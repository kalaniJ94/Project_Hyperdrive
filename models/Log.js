const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Log extends Model {}

Log.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        mission_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'mission',
                id: 'id'
            },
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {    sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'log',
    }
);


module.exports = Log;