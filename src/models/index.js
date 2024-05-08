

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize(DATABASE_URL, { logging: false });

const Collection = require('./collection.js');
const foodSchema = require('./food.model.js');
const entertainmentSchema = require('./entertainment.model.js');

const foodModel = foodSchema(sequelize, DataTypes);
const entertainmentModel = entertainmentSchema(sequelize, DataTypes);

// Define associations between Food and Entertainment models
foodModel.belongsTo(entertainmentModel, { foreignKey: 'entertainmentid', targetKey: 'id'});
entertainmentModel.hasMany(foodModel, { foreignKey: 'entertainmentid', sourceKey: 'id'});

const foodCollection = new Collection(foodModel);
const entertainmentCollection = new Collection(entertainmentModel);

module.exports = {
  db: sequelize,
  Food: foodCollection,
  Entertainment: entertainmentCollection,
};
