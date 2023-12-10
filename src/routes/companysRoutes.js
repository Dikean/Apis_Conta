const express = require('express');
const router = express.Router();
const companysController = require('../controllers/companysController');
const checkJwt = require('../middleware/authMiddleware');
const checkRole = require('../middleware/checkRoleMiddleware');

router.get('/getAllCompanys',checkJwt, checkRole('ModuloAuditoria_Administrador'), companysController.getAllCompanys);

module.exports = router;
