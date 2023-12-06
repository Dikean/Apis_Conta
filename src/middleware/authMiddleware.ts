const { auth } = require('express-oauth2-jwt-bearer');

// Configuración de Auth0
const checkJwt = auth({
    audience: 'Conta_apiGeneral',
    issuerBaseURL: 'https://dev-w1j3tra2.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

module.exports = checkJwt;
