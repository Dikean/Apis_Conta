const db = require('../utils/db');

exports.findAll = async () => {
    try {
        // Preparar la consulta SQL sin datos específicos
        const sql = 'SELECT * FROM UsersCompany';

        // Ejecutar la consulta preparada
        const [results] = await db.query(sql); // Aquí no se pasan parámetros porque la consulta no los requiere

        return results;
    } catch (error) {
        throw error;
    }
};


exports.getEmployeeForCompany = async () => {
    try {
        // Preparar la consulta SQL con un marcador de posición para el parámetro
        const sql = `
            SELECT u.UserID, u.UserName
            FROM Users u
            JOIN UsersCompany uc ON u.UserID = uc.UserID
            WHERE uc.CompanyID = ?
        `;

        // Ejecutar la consulta preparada pasando el ID de la compañía de forma segura
        const [results] = await db.query(sql, [companyId]);

        return results;
    } catch (error) {
        throw error;
    }
};