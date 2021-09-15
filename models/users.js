const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model {};

Users.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
  }
);

module.exports = Users;