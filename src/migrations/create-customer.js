module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    Customer.hasMany(models.Sale, { foreignKey: 'customerId', as: 'sales' });
  };
  return Customer;
};
