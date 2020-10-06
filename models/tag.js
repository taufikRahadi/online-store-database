'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      // define association here
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