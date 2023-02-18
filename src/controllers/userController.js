const user = require('../models/user');

const getUser = async (req, res) => {
    try {
        const users = await user.findAll();
        res.json({
            status: true,
            message: 'Get User Successfully',
            data: users
        });
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}

const findById = async (req, res) => {
    try {
        const users = await user.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json({
            status: true,
            message: 'Get User Successfully',
            data: users
        });
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}

const createUser = async (req, res) => {
    try {
        const users = await user.create(req.body);
        res.json({
            status: true,
            message: 'Create User Successfully'
        }, 201);
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const users = await user.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            status: true,
            message: 'Update User Successfully'
        }, 200);
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const users = await user.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            status: true,
            message: 'Delete User Successfully'
        }, 200);
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}

module.exports = { getUser,  findById, createUser, updateUser, deleteUser};