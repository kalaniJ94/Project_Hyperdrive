const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Planet extends Model {}

Planet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        mass:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        radius:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        period:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        semi_major_axis:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        temperature:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        distance_light_year:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        host_star_mass:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        host_star_temperature:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Terrain:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        Terrain:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        habitable:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'planet',
    }
)

module.exports = Planet;