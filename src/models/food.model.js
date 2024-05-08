'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  protein: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fat: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  carbohydrates: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  entertainmentId: {
    type: DataTypes.INTEGER,
    
  },
});

module.exports = Food;
