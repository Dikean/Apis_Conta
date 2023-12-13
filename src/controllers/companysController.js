const companysController = require('../models/companysModel');

exports.getAllCompanys = async (req, res) => {
    try {
        const companys = await companysController.allDataCompanys();
        res.json(companys);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/**Obtener las ultimas 4 compañias por Adminstrador dela empresa */
exports.getLast4CompanysById = async (req, res) => {
    try {
        const companys = await companysController.allDataCompanys();
        res.json(companys);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/**Obtener Toda la data de una compañia By id */
exports.getDataByCompany = async (req, res) => {
    try {
        const companys = await companysController.allDataCompanys();
        res.json(companys);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

