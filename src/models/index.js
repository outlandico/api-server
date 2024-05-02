require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(DATABASE_URL, { logging: false });

const FoodModel = require('./food');
const EntertainmentModel = require('./entertainment');

const Food = FoodModel(sequelize, DataTypes);
const Entertainment = EntertainmentModel(sequelize, DataTypes);

const db = sequelize; // Add back the db variable

module.exports = {
  db, // Export the db variable
  Food,
  Entertainment,
};
