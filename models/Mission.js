const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mission extends Model {}

Mission.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'user',
                key: 'id'
            },
          },
          planet_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'planet',
                key: 'id'
            },
          },
          status: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'mission',
    }
);


module.exports = Mission;