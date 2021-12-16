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

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/About", "/Contact"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})