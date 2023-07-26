require('dotenv').config()

const headers = () => {
    return  {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
    };
}

module.exports = headers;