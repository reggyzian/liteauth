const { Sequelize } = require('sequelize');

const db = new Sequelize('liteauth', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = db;
