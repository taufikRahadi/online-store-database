'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      this.hasMany(models.ProductTag, {
        foreignKey: 'tagId',
        as: 'products',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  };
  Tag.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3
      }
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};