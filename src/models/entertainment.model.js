'use strict';

const Entertainment = (sequelize, DataTypes) => sequelize.define('Entertainment', {
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
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Entertainment', // Explicitly specify the table name
});

module.exports = Entertainment;
