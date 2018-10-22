const express = require('express');
const router = express.Router();

const funcionario = require('../controllers/funcionario.controller');

router.get('/', funcionario.getFuncionarios);
router.post('/', funcionario.createFuncionario);
router.get('/:id', funcionario.getFuncionario);
router.put('/:id', funcionario.editFuncionario);
router.delete('/:id', funcionario.deleteFuncionario);


module.exports = router;