'use strict';
const {
  Model
} = require('sequelize');
const { v3: uuidv3 } = require('uuid')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsTo(models.ProductCategory, {
        foreignKey: 'categoryId',
        as: 'category',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      this.hasMany(models.ProductTag, {
        foreignKey: 'productId',
        as: 'tags',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      this.hasMany(models.ProductVariant, {
        foreignKey: 'productId',
        as: 'variants',
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL'
      })
    }
  };
  Product.init({
    code: {
      type: DataTypes.UUID,
      defaultValue: uuidv3(),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3
      }
    },
    price: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    weight: {
      type: DataTypes.FLOAT.UNSIGNED
    },
    stock: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    description: {
      type: DataTypes.TEXT
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};