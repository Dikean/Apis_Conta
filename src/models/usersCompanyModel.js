const db = require('../utils/db');

exports.findAll = async () => {
    try {
        const [results] = await db.query('SELECT * FROM UsersCompany');
        return results;
    } catch (error) {
        throw error;
    }
};