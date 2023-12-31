const chai = require('chai')
const expect = chai.expect;

const conBingo = require('./bingo.controller');

var testWithinRange = (arr, min, max) => {
    console.log(`      [LOG] Array List: ${arr}; Min: ${min}; Max: ${max}`);
    for(let idx = 0; idx < arr.length; idx++) {
        if(arr[idx] > max || arr[idx] < min) { return false; }
    }

    return true;
}

describe('bingo.controller.js', () => {
    context('Generate Bingo Card', () => {
        before(() => {
            console.log(`    [CROSS ENV] NODE_ENV: ${process.env.NODE_ENV}`);
        })
        it('Generate and Test Bingo Card', async () => {
            const req = {
                "body": {
                    "user_id": 1,
                    "group_id": 1
                }
            };

            const bingo_card = await conBingo.generateBingoCard(req);
            console.log(`      [LOG] Generated Bingo Card: ${JSON.stringify(bingo_card)}`);

            console.log(`      [LOG] Test to Check if Array per Letter is equal to 5`);
            expect(bingo_card.B.length).to.equal(5);
            expect(bingo_card.I.length).to.equal(5);
            expect(bingo_card.N.length).to.equal(5);
            expect(bingo_card.G.length).to.equal(5);
            expect(bingo_card.O.length).to.equal(5);
            
            console.log(`      [LOG] Test to Check if Array Values are within Range`);
            expect(testWithinRange(bingo_card.B, 1, 15)).to.equal(true);
            expect(testWithinRange(bingo_card.I, 16, 30)).to.equal(true);
            expect(testWithinRange(bingo_card.N, 31, 45)).to.equal(true);
            expect(testWithinRange(bingo_card.G, 46, 60)).to.equal(true);
            expect(testWithinRange(bingo_card.O, 61, 75)).to.equal(true);
        });
    });
});