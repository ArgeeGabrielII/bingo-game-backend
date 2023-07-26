const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

const conHealth = require('../controller/health-check/health.controller');
const conBingo = require('../controller/bingo-card/bingo.controller');
const conBingoDraw = require('../controller/bingo-draw/bingo-draw.controller');

const routes = (app) => {

    // @route   GET /health
    // @desc    Application Health Check
    router.get("/", conHealth.health);

    // @route   POST /generate-card
    // @desc    Generate Bingo Card
    router.post("/generate-card", conBingo.generateBingoCard(req, res));

    // @route   POST /bingo-draw
    // @desc    Draw Number and Save to Hasura
    router.post("/bingo-draw", conBingoDraw.drawBingo(req, res));

    app.use(bodyParser.json()); 
    app.use(router);
};

module.exports = routes;