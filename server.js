const cors = require('cors');
const express = require('express');

const initRoutes = require('./src/routes');

const app = express();
const port = process.env.PORT;

global.__basedir = __dirname;
const corsOptions = { origin: 'http://localhost:4000' };
app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

initRoutes(app);

app.listen(port, () => { console.log(`[LOG] Running at localhost:${port}`); });

exports.bingo = app;