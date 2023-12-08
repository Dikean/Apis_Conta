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


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
