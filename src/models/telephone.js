'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telephone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Telephone.init({
    customerId: DataTypes.INTEGER,
    number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Telephone',
  });
  return Telephone;
};