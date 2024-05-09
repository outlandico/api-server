'use strict';

const Food = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
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
    entertainmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Food;
};

module.exports = Food;

