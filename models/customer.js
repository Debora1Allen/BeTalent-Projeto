'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    Customer.hasMany(models.Address, { foreignKey: 'customerId', as: 'addresses' });
    Customer.hasMany(models.Telephone, { foreignKey: 'customerId', as: 'telephones' });
    Customer.hasMany(models.Sale, { foreignKey: 'customerId', as: 'sales' });
  };
  return Customer;
};
