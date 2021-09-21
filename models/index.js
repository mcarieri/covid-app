const Entries = require('./entries');
const Users = require('./users');

Entries.belongsTo(Users);
Users.hasMany(Entries);

module.exports = { Entries, Users };