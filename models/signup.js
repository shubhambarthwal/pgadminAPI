'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class signup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  signup.init({
  Name: DataTypes.STRING,
Phone:DataTypes.STRING,
Email: DataTypes.STRING, 
Password: DataTypes.STRING,
isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'signup',
  });
  return signup;
};