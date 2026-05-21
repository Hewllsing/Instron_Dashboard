const express = require('express');
const router = express.Router();

const resultadosController = require('../controllers/resultadosController');

router.get('/', resultadosController.listarResultados);
router.post('/sincronizar', resultadosController.sincronizarResultados);

module.exports = router;