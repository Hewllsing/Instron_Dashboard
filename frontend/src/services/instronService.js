import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});


// ======================================================
// HEALTH
// ======================================================

export async function getHealth() {

    const response = await api.get('/instron/health');

    return response.data;
}


// ======================================================
// RESULTADOS
// ======================================================

export async function getResultados() {

    const response = await api.get('/resultados');

    return response.data;
}


// ======================================================
// SINCRONIZAR
// ======================================================

export async function syncResultados() {

    const response = await api.post(
        '/instron/sync-results'
    );

    return response.data;
}