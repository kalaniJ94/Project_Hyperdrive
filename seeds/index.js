const sequelize = require('../config/connection');

const {Planet,Mission,Log,User} = require('../models'); 
const planetData = require('./planetData.json'); 
const missionData = require('./missionData.json'); 
const logData = require('./logData.json'); 
const userData = require('./userData.json'); 


//seeds db with planet info
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

const planets = await Planet.bulkCreate(planetData, {
  individualHooks: true,
  returning: true,
});

const user = await User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

const missions = await Mission.bulkCreate(missionData, {
  individualHooks: true,
  returning: true,
});

const logs = await Log.bulkCreate(logData, {
  individualHooks: true,
  returning: true,
});



  process.exit(0);
};

seedDatabase();