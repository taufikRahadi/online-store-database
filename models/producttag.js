'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductTag extends Model {
    static associate(models) {
      this.belongsTo(models.Product, { 
        foreignKey: 'productId', 
        as: 'product',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      this.belongsTo(models.Tag, { 
        foreignKey: 'tagId', 
        as: 'tag',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  };
  ProductTag.init({
    tagId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductTag',
  });
  return ProductTag;
};