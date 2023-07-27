exports.generateBingoCard = async (req, res) => {
    const { user_id, group_id } = req.body;
    console.log(`    [LOG] UserID: ${user_id}; GroupID: ${group_id}`);

    const bingoCardArray = {
        "B": await generateColumnNumbers(1, 15),
        "I": await generateColumnNumbers(16, 30),
        "N": await generateColumnNumbers(31, 45),
        "G": await generateColumnNumbers(46, 60),
        "O": await generateColumnNumbers(61, 75)
    }

    return bingoCardArray;
}

const generateColumnNumbers = async (min, max) => {
    var arr = [];
    while (arr.length < 5) {
        const r = Math.floor(Math.random() * (max - min + 1) + min);
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
}