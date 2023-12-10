const AccessUserModules = require('../models/accessUserModulesModel');

exports.getAllAccessUserModules = async (req, res) => {
    try {
        const accessUserModule = await AccessUserModules.allDataAccessUserModule();
        res.json(accessUserModule);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
