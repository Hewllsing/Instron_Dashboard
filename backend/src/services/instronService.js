const axios = require('axios');
require('dotenv').config();

async function buscarResultadosInstron() {
    const response = await axios.get(`${process.env.INSTRON_API_URL}/results`);

    return response.data;
}

module.exports = {
    buscarResultadosInstron
};