const _gqlProcess = require('../../processor/gql');
const header = require('../../processor/header.gql');

const getHistory = require('./bingo-draw-history.gql');

exports.drawBingo = async (group_id) => {
    // Variable Declarations
    var genNumber, chkHist;

    // Generate Number Draw
    do {
        // Get Number History
        genNumber = await generateNumbers(1, 75);
        console.log(`[LOG] [DRAW] Drawn Number is ${genNumber}`);

        // Check if Number is already drawn.
        const resHistData = _gqlProcess(getHistory(group_id, genNumber), header());
        chkHist = resHistData.data.poc_history;
        console.log(`[LOG] GroupID: ${group_id}; Number Draw History: ${chkHist}`)
    } while (chkHist.length > 0);

    // Check if within 1-75 Range
    if(genNumber > 0 && genNumber <= 75) {
        if(genNumber <= 15) { return { "B": genNumber }; }
        if(genNumber <= 30) { return { "I": genNumber }; }
        if(genNumber <= 45) { return { "N": genNumber }; }
        if(genNumber <= 60) { return { "G": genNumber }; }
        if(genNumber <= 75) { return { "O": genNumber }; }
    } else { 
        console.error(`[ERROR] Generated Number [${genNumber}], is not in range.`);
        return {"err": "Generated Number, is not in range."};
    }
}

const generateNumbers = async (min, max) => {
    return r = Math.floor(Math.random() * (max - min + 1) + min);
}