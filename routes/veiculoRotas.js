const express = require('express');
const router = express.Router();

const VeiculoController = require('../controllers/veiculoController');


//LISTAR TODOS OS VEICULOS CADASTRADOS
router.get('/view/veiculos', VeiculoController.allVeiculos)


//ADICIONAR VEÍCULO
router.get('/cadastro/veiculo', VeiculoController.newVeiculo)
router.post('/cadastro/veiculo', VeiculoController.newVeiculoSave)

//ATUALIZAR VEICULO
router.get('/editar/veiculo/:idVeiculo', VeiculoController.updateVeiculo)
router.post('/editar/veiculo/:idVeiculo', VeiculoController.updateVeiculoSave)


//EXCLUIR VEÍCULOS
router.get('/excluir/veiculo/:idVeiculo', VeiculoController.removeVeiculo)
router.post('/excluir/veiculo/:idVeiculo', VeiculoController.removeVeiculo)

module.exports = router;
