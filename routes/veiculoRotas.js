const express = require('express');
const router = express.Router();

const VeiculoController = require('../controllers/veiculoController');

const V_session = require('../middlewares/session')

//LISTAR TODOS OS VEICULOS CADASTRADOS
router.get('/view/veiculos', V_session, VeiculoController.allVeiculos)


//ADICIONAR VEÍCULO
router.get('/cadastro/veiculo', V_session, VeiculoController.newVeiculo)
router.post('/cadastro/veiculo', VeiculoController.newVeiculoSave)

//ATUALIZAR VEICULO
router.get('/editar/veiculo/:idVeiculo', V_session, VeiculoController.updateVeiculo)
router.post('/editar/veiculo/:idVeiculo', VeiculoController.updateVeiculoSave)


//EXCLUIR VEÍCULOS
router.get('/excluir/veiculo/:idVeiculo', V_session, VeiculoController.removeVeiculo)
router.post('/excluir/veiculo/:idVeiculo', VeiculoController.removeVeiculo)

module.exports = router;
