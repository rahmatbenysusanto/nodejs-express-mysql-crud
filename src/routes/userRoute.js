const express = require('express');
const { getUser, findById, createUser, updateUser, deleteUser }  = require('../controllers/userController');

const route = express.Router();

route.get('/users', getUser);
route.get('/user/:id', findById);
route.post('/user', createUser);
route.patch('/user/:id', updateUser);
route.delete('/user/:id', deleteUser);

module.exports = route;