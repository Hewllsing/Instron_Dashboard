const express = require('express');
const cors = require('cors');
const axios = require('axios');

const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

// status para testar conexão com a InstronBridgeSelfHost
app.get('/api/instron/health', async (req, res) => {
    try {
        const response = await axios.get(
            'http://localhost:9000/api/instron/health'
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao conectar na InstronBridgeSelfHost',
            detalhes: error.message
        });
    }
});

app.listen(3000, () => {
    console.log('Servidor Node rodando na porta 3000');
});

app.post('/api/instron/sync-results', async (req, res) => {
    try {
        const response = await axios.get(
            'http://localhost:9000/api/instron/results/formatted'
        );

        const result = response.data;

        await db.query(`
            INSERT INTO resultados
            (table_number, result_json)
            VALUES (?, ?)
        `, [
            result.tableNumber,
            JSON.stringify(result.data)
        ]);

        res.json({
            sucesso: true,
            mensagem: 'Resultados guardados com sucesso.',
            tableNumber: result.tableNumber,
            data: result.data
        });

    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: error.message
        });
    }
});

app.get('/api/resultados', async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT *
            FROM resultados
            ORDER BY created_at DESC
        `);

        const resultados = rows.map(row => ({
            id: row.id,
            tableNumber: row.table_number,
            data: JSON.parse(row.result_json),
            createdAt: row.created_at
        }));

        res.json(resultados);

    } catch (error) {
        res.status(500).json({
            erro: error.message
        });
    }
});




// =======================================================
// FAKE ENDPOINT PARA TESTES - DELETAR DEPOIS
// =======================================================

app.post('/api/instron/fake-results', async (req, res) => {

    try {

        const fakeData = {
            tableNumber: 1,
            data: [
                [
                    null,
                    "S0 [mm^2]",
                    "Rp0.2 [N/mm^2]",
                    "Rm [N/mm^2]",
                    "Ag [%]",
                    "A 50mm [%]",
                    "Status"
                ],
                [
                    "1",
                    "39.17",
                    "243",
                    "260",
                    "8.42",
                    "13.03",
                    "ok"
                ],
                [
                    "2",
                    "37.38",
                    "250",
                    "269",
                    "8.35",
                    "13.07",
                    "ok"
                ],
                [
                    "3",
                    "40.01",
                    "255",
                    "275",
                    "9.10",
                    "14.20",
                    "warning"
                ]
            ]
        };

        await db.query(`
            INSERT INTO resultados
            (table_number, result_json)
            VALUES (?, ?)
        `, [
            fakeData.tableNumber,
            JSON.stringify(fakeData.data)
        ]);

        res.json({
            sucesso: true,
            mensagem: 'Resultados fictícios inseridos.',
            dados: fakeData
        });

    } catch (error) {

        res.status(500).json({
            erro: error.message
        });
    }
});