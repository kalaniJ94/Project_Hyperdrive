const User = require('./User');
const Planet = require('./Planet');
const Mission = require('./Mission');
const Log = require('./Log');

Log.belongsTo(Mission, {
    foreignKey: 'mission_id'
})

Mission.belongsTo(User, {
    foreignKey: 'user_id'
})
Mission.belongsTo(Planet, {
    foreignKey: 'planet_id'
})
Mission.hasOne(Log, {
    foreignKey: 'mission_id',
    onDelete: 'CASCADE'
})
User.hasMany(Mission,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Planet.hasMany(Mission,{
    foreignKey: 'planet_id',
    onDelete: 'CASCADE'
})



module.exports = { User,Planet,Mission,Log };
