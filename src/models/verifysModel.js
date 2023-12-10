const db = require('../utils/db');

exports.AlldataVerify = async () => {
    try {
        const [results] = await db.query('SELECT * FROM Verifys');
        return results;
    } catch (error) {
        throw error;
    }
};