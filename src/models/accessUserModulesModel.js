const db = require('../utils/db');

exports.allDataAccessUserModule = async () => {
    try {
        const [results] = await db.query('SELECT * FROM AccessUserModules	');
        return results;
    } catch (error) {
        throw error;
    }
};