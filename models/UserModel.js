const { Sequelize } = require('sequelize');
const db = require('../config/Database');

const { DataTypes } = Sequelize;

const Users = db.define('users', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  refresh_token: {
    type: DataTypes.TEXT
  },
  authAt: {
    type: DataTypes.DATE
  }
}, {
  freezeTableName: true
});

module.exports = Users;
