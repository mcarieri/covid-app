const seedUsers = require('./user-seeds');
const seedEntries = require('./entry-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedEntries();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  
  process.exit(0);
};

seedAll();
