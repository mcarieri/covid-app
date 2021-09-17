const { Users } = require('../models');

const userData = [
  {
    name: 'Billy',
    email: 'billyruns@yahoo.com',
    password: 'billyruns'
  },
  {
    name: 'Jane',
    email: 'jane23@gmail.com',
    password: 'janecodes23'
  },
  {
    name: 'Martin',
    email: 'martin@gmail.com',
    password: 'martinistired'
  },
  {
    name: 'Trinity',
    email: 'trinity@hotmail.com',
    password: 'trinity12345'
  },
  {
    name: 'Aice',
    email: 'alice@gmail.com',
    password: 'alice9876'
  },
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;
