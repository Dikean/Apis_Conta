const express = require('express');
const router = express.Router();
const usersCompanyController = require('../controllers/usersCompanyController');
const checkJwt = require('../middleware/authMiddleware');

router.get('/getAllUserCompany',checkJwt, usersCompanyController.getAllUsersCompanies);
// Ruta protegida para eliminar un usuario
router.delete('/deleteUserCompany/:userId', checkJwt, usersCompanyController.deleteUser);


module.exports = router;
