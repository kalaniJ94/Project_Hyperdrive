const sequelize = require('../config/connection');
const {Planet} = require('../models'); 
const planetData = require('./planetData.json'); 

//seeds db with planet info
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

const planets = await Planet.bulkCreate(planetData, {
  individualHooks: true,
  returning: true,
});



  process.exit(0);
};

seedDatabase();