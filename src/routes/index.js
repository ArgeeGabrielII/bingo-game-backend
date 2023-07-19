const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

const conBingo = require("../controller/bingo.controller");

const routes = (app) => {
    router.post("/generateCard", conBingo.generateBingoCard);

    app.use(bodyParser.json()); 
    app.use(router);
};

module.exports = routes;
