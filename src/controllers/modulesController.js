const allDataModule = require('../models/modulesModel');

exports.getAllDataModule= async (req, res) => {
    try {
        const Modules = await allDataModule.allDataModule();
        res.json(Modules);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
