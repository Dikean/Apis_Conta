const express = require('express');
const router = express.Router();
const usersCompanyController = require('../controllers/usersCompanyController');

router.get('/', usersCompanyController.getAllUsersCompanies);
// Otras rutas...

module.exports = router;
