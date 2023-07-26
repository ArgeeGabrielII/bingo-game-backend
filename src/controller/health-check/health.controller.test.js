const chai = require('chai');
const assert = require('assert');
const expect = chai.expect;

const conBingo = require('./health.controller');

describe('health.controller.js', () => {
    
    context('Health Check', () => {
        before(() => {
            console.log(`    [CROSS ENV] NODE_ENV: ${process.env.NODE_ENV}`);
        })
        it('Health Check', async () => {
            const res = await conBingo.health();
            console.log(`      [LOG] Health Response: ${JSON.stringify(res)}`);

            assert.deepEqual(res, {"message": "Ok!"});
            expect(res.message).to.equal('Ok!');
        });
    });
});