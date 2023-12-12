// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');
const adopter_router = require('./adopters/adopters-router');
const dogs_router = require('./dogs/dogs-router');

const server = express();

server.use(express.json());
server.use('/api/adopters', adopter_router);
server.use('api/dogs', dogs_router);


server.get('/', (req, res) => {
  res.send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `);
});

module.exports = server;
