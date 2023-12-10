const db = require('../utils/db');

exports.allDataModule = async () => {
    try {
        const [results] = await db.query('SELECT * FROM Modules');
        return results;
    } catch (error) {
        throw error;
    }
};