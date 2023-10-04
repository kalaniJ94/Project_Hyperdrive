const sequelize = require('../config/connection');
// const ModelNameHere = require('../models/'); --> TODO: Imports the models once created
// const SeedingJSONFileNameHere = require('./dish-seeds.json'); -->TODO: Imports seed files once created

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

//await ModelName.bulkCreate here

  process.exit(0);
};

seedDatabase();