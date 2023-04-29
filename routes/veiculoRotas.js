const express = require('express');
const router = express.Router();

const VeiculoController = require('../controllers/veiculoController');


//LISTAR TODOS OS VEICULOS CADASTRADOS
router.get('/', VeiculoController.allVeiculos)


//ADICIONAR VEÍCULO
router.get('/cadastro/veiculo', VeiculoController.newVeiculo)
router.post('/cadastro/veiculo', VeiculoController.newVeiculoSave)

//ATUALIZAR VEICULO
router.get('/editar/veiculo/:id', VeiculoController.updateVeiculo)
router.post('/editar/veiculo/:id', VeiculoController.updateVeiculoSave)


//EXCLUIR VEÍCULOS
router.get('/excluir/veiculo/:id', VeiculoController.removeVeiculo)
router.post('/excluir/veiculo/:id', VeiculoController.removeVeiculo)

module.exports = router;
