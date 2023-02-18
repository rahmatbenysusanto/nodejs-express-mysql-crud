const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PSW, {
    'host': '127.0.0.1',
    'dialect': 'mysql'
});

module.exports = db;