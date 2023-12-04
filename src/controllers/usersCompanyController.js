const usersCompanyModel = require('../models/usersCompanyModel');

exports.getAllUsersCompanies = async (req, res) => {
    try {
        const usersCompanies = await usersCompanyModel.findAll();
        res.json(usersCompanies);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

