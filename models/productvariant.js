'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductVariant extends Model {
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL'
      })
    }
  };
  ProductVariant.init({
    color: DataTypes.STRING,
    size: DataTypes.INTEGER,
    materials: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductVariant',
  });
  return ProductVariant;
};