module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    customerId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    unitPrice: DataTypes.FLOAT,
    totalPrice: DataTypes.FLOAT,
    dateTime: DataTypes.DATE
  }, {});
  Sale.associate = function(models) {
    Sale.belongsTo(models.Customer, { foreignKey: 'customerId' });
    Sale.belongsTo(models.Product, { foreignKey: 'productId' });
  };
  return Sale;
};
