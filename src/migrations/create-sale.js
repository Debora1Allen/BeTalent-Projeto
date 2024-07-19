module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    customerId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    unitPrice: DataTypes.FLOAT,
    totalPrice: DataTypes.FLOAT,
    date: DataTypes.DATE
  }, {});
  Sale.associate = function(models) {
    Sale.belongsTo(models.Customer, { foreignKey: 'customerId', as: 'customer' });
    Sale.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
  };
  return Sale;
};
