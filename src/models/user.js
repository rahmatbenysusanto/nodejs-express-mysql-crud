const { Sequelize } = require('sequelize');
const db = require('./database');

const { DataTypes } = Sequelize;

const user = db.define('users', {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.TEXT,
}, {
    freezeTableName: true
});

module.exports = user;