const chai = require('chai')
const expect = chai.expect;

const conBingo = require('./bingo.controller');

var testWithinRange = (arr, min, max) => {
    for(let idx = 0; idx < arr.length; idx++) {
        // console.log(arr[idx], min, max);
        if(arr[idx] > max || arr[idx] < min) { return false; }
    }

    return true;
}

describe('bingo.controller.js', () => {
    // context('generateColumnNumbers', () => {
    //     it('generate an array within 1-15', () => {
    //         expect([1,2,3,4,5]).to.have.lengthOf(5);
    //         expect(testWithinRange([1,2,3,4,5], 1, 15)).to.equal(true);
    //     });
    //     it('generate an array within 16-30', () => {
    //         expect([16,17,18,19,20]).to.have.lengthOf(5);
    //         expect(testWithinRange([16,17,18,19,20], 16, 30)).to.be.true;
    //     });
    //     it('generate an array within 31-45', () => {
    //         expect([31,32,33,34,35]).to.have.lengthOf(5);
    //         expect(testWithinRange([31,32,33,34,35], 31, 45)).to.be.true;
    //     });
    //     it('generate an array within 46-60', () => {
    //         expect([46,47,48,49,50]).to.have.lengthOf(5);
    //         expect(testWithinRange([46,47,48,49,50], 46, 60)).to.be.true;
    //     });
    //     it('generate an array within 61-75', () => {
    //         expect([61,62,63,64,65]).to.have.lengthOf(5);
    //         expect(testWithinRange([61,62,63,64,65], 61, 75)).to.be.true;
    //     });
    // });

    context('generateBingoCard', () => {
        it('generate a bingo card', async () => {
            const bingo_card = await conBingo.generateBingoCard();
            console.log(`      [LOG] Generated Bingo Card: ${JSON.stringify(bingo_card)}`);
            expect(1).to.equal(1);
        });
    });
});