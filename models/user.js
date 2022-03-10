'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    surname: DataTypes.STRING,
    name: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};