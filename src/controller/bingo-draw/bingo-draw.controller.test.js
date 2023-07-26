const chai = require('chai');
const expect = chai.expect;

const conDraw = require('./bingo-draw.controller');

describe('bingo-draw.controller.js', () => {
    context('Check Number Draw', async () => {
        const resDraw = await conDraw.drawBingo();

        before(() => {
            console.log(`    [CROSS ENV] NODE_ENV: ${process.env.NODE_ENV}`);
        })

        it('Test Number Draw');
    });
});