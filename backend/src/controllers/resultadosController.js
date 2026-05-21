const db = require('../config/db');
const instronService = require('../services/instronService');

async function listarResultados(req, res) {
    try {
        const [resultados] = await db.query(`
            SELECT * FROM resultados
            ORDER BY criado_em DESC
        `);

        res.json(resultados);
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao listar resultados.',
            detalhes: error.message
        });
    }
}

async function sincronizarResultados(req, res) {
    try {
        const dados = await instronService.buscarResultadosInstron();

        await db.query(`
            INSERT INTO resultados 
            (nome_amostra, metodo, carga_maxima, deslocamento, resultado_final, data_teste)
            VALUES (?, ?, ?, ?, ?, ?)
        `, [
            dados.nomeAmostra,
            dados.metodo,
            dados.cargaMaxima,
            dados.deslocamento,
            dados.resultadoFinal,
            dados.dataTeste
        ]);

        res.json({
            mensagem: 'Resultado sincronizado com sucesso.',
            dados
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao sincronizar resultados da Instron.',
            detalhes: error.message
        });
    }
}

module.exports = {
    listarResultados,
    sincronizarResultados
};