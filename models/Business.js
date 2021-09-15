const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Business extends Model {};

Business.init(
  {
    name: DataTypes.STRING,
    // columns: DataTypes.INTEGER, etc
    mask: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    sanitizer: DataTypes.INTEGER,
    patrons: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, 
  {
    sequelize,
  }
);

module.exports = Business;