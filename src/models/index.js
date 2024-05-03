
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const { Sequelize } = require('sequelize');

let sequelize = new Sequelize(DATABASE_URL, { logging: false });



module.exports = {
  db: sequelize,

};
