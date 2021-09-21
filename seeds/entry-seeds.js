const { Entries } = require('../models');

const entryData = [
  {
    name: 'BarnHouse',
    zipcode: '90025',
    date: '09/04/2020',
    mask: 3,
    distance: 4,
    sanitizer: 2,
    patrons: 1,
    comment: 'leeraoivdsi asdifu aiosdfuhasdf hioasdf hasoiudfh as ioasfdiuh aisduhf asdoifuh asoidfuh'
  },
  {
    name: 'AstroWorld',
    zipcode: '90010',
    date: '05/20/2021',
    mask: 5,
    distance: 2,
    sanitizer: 4,
    patrons: 2,
    comment: 'asdfoij aspdofi apsodifj asdpofij asdfpo ijasefasdpoifgj'
  },
  {
    name: 'PandaBear',
    zipcode: '90001',
    date: '07/19/2021',
    mask: 3,
    distance: 4,
    sanitizer: 2,
    patrons: 4,
    comment: 5
  },
  {
    name: 'BestBar',
    zipcode: '90020',
    date: '03/23/2020',
    mask: 5,
    distance: 4,
    sanitizer: 2,
    patrons: 4,
    comment: 1
  },
  {
    name: 'SuddenlyAwake',
    zipcode: '90037',
    date: '09/02/2021',
    mask: 3,
    distance: 1,
    sanitizer: 4,
    patrons: 4,
    comment: 5
  }
];

const seedEntries = () => Entries.bulkCreate(entryData);

module.exports = seedEntries;