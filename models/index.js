const entries = require('./entries');
const users = require('./users');

entries.belongsTo(users);
users.hasMany(entries);

module.exports = { entries, users };