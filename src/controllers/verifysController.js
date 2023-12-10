const VerifysModel = require('../models/verifysModel');

exports.getAllDataVerifys = async (req, res) => {
    try {
        const Verifys = await VerifysModel.AlldataVerify();
        res.json(Verifys);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
