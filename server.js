'use strict'

//const env = process.env.NODE_ENV // read the environment variable (will be 'production' in production mode)
const express = require('express');
console.log('Express Server')
const app = express();
//require('dotenv').config()
const path = require('path');

// enable CORS if in development, for React local development server to connect to the web server.
const cors = require('cors')
//if (env !== 'production') { app.use(cors()) }

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

// Error codes
app.get('/problem', (req, res) => {
	res.status(500).send('There was a problem on the server')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})