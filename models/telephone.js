'use strict';
module.exports = (sequelize, DataTypes) => {
  const Telephone = sequelize.define('Telephone', {
    customerId: DataTypes.INTEGER,
    number: DataTypes.STRING
  }, {});
  Telephone.associate = function(models) {
    Telephone.belongsTo(models.Customer, { foreignKey: 'customerId', as: 'customer' });
  };
  return Telephone;
};
