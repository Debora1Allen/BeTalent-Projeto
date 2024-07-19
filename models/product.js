'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Product.associate = function(models) {
    Product.hasMany(models.Sale, { foreignKey: 'productId', as: 'sales' });
  };
  return Product;
};
