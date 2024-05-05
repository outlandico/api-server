// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// // Create a Sequelize instance for the main database
// const mainDB = new Sequelize({
//   dialect: 'postgres',
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: 'food_database', // Replace with process.env.DB_NAME if you have it in your .env file
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   logging: console.log, // Enable logging directly to console
// });

// // Create a Sequelize instance for the entertainment database
// const entertainmentDB = new Sequelize({
//   dialect: 'postgres',
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: 'entertainment_database', // Replace with process.env.ENTERTAINMENT_DB_NAME if you have it in your .env file
//   username: process.env.DB_USER,
//   password: process.env.ENTERTAINMENT_DB_PASSWORD,
//   logging: true, // Enable logging
// });

// // Test the database connections and handle errors
// async function testDatabaseConnection() {
//   try {
//     await mainDB.authenticate();
//     console.log('Main database connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the main database:', error);
//   }

//   try {
//     await entertainmentDB.authenticate();
//     console.log('Entertainment database connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the entertainment database:', error);
//   }
// }

// testDatabaseConnection(); // Test database connections when the module is loaded

// // Export the database instances
// module.exports = {
//   mainDB,
//   entertainmentDB,
// };
