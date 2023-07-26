const chai = require('chai')
const expect = chai.expect;

const conBingo = require('./health.controller');

describe('health.controller.js', () => {
    context('Context: Health Check', () => {
        it('Health Check', async () => {
            const res = await conBingo.health();
            console.log(`      [LOG] Health Response: ${JSON.stringify(res)}`);

            expect(res.message).to.equal('Ok!');
        });
    });
});