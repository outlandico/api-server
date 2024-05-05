// models/index.js

const { Sequelize, DataTypes } = require('sequelize');
const foodModel = require('./food.js');
const entertainmentModel = require('./entertainment.js'); // Import entertainment model

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;
const sequelize = new Sequelize(DATABASE_URL, { logging: false });

module.exports = {
  db: sequelize,
  Food: foodModel(sequelize, DataTypes),
  Entertainment: entertainmentModel(sequelize, DataTypes), // Use entertainment model
};
