const express = require('express');
const dotenv = require('dotenv');


// Cargar las variables de entorno
dotenv.config();

// Importar rutas
const usersCompanyRoutes = require('./routes/usersCompanyRoutes');
const db = require('../src/utils/db');
// Otros imports de rutas...

const app = express();

// Middleware para parsear el body
app.use(express.json());

// Usar rutas
app.use('/api/userscompany', usersCompanyRoutes);

// Otros usos de rutas...
app.get('/hola', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM UsersCompany');
        res.json(results);
    } catch (error) {
        // Handle error
        console.error(error);
        res.status(500).send('An error occurred');
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
