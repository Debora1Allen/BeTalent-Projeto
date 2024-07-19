'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    customerId: DataTypes.INTEGER,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    Address.belongsTo(models.Customer, { foreignKey: 'customerId', as: 'customer' });
  };
  return Address;
};
