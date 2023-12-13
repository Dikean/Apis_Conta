const db = require('../utils/db');

exports.allDataModule = async () => {
      try {
        // Preparar la consulta SQL sin datos específicos
        const sql = 'SELECT * FROM Modules';

        // Ejecutar la consulta preparada
        const [results] = await db.query(sql); // Aquí no se pasan parámetros porque la consulta no los requiere

        return results;
    } catch (error) {
        throw error;
    }
};