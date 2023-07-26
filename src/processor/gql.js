require('dotenv').config()
const axios = require('axios');

const _processGraphRequest = async (query, headers) => {
    try {
        // console.log(query, headers);
        const res = await axios.post(process.env.GRAPHQL_ENDPOINT, { query }, { headers });
        return res.data;
    } catch (err) {
        console.error(`[ERROR] Message: ${err}`);
        return null;
    }
};

module.exports = _processGraphRequest;