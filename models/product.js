'use strict';
const {
  Model
} = require('sequelize');
const { v1: uuidv1 } = require('uuid')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    code: {
      type: DataTypes.UUID,
      defaultValue: uuidv1(),
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
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};