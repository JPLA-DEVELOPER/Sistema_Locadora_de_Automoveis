const express = require('express');
const router = express.Router();

const LocacaoController = require('../controllers/locacaoController');

const V_session = require('../middlewares/session')

router.get('/view/locacao', V_session, LocacaoController.allLocacao)

router.get('/buscar-cliente/:cpf', LocacaoController.buscarCliente);
router.get('/buscar-veiculo/:placa', LocacaoController.buscarVeiculo);


//ADICIONAR CLIENTE
router.get('/cadastro/locacao', V_session, LocacaoController.newLocacao)
router.post('/cadastro/locacao', LocacaoController.newLocacaoSave)

//ATUALIZAR CLIENTE
router.get('/editar/locacao/:idLocacao', V_session, LocacaoController.updateLocacao)
router.post('/editar/locacao/:idLocacao', LocacaoController.updateLocacaoSave)

//DETALHES LOCAÇÃO
router.get('/detalhes/locacao/:idLocacao', V_session, LocacaoController.detalhesLocacao)

//EXCLUIR CLIENTE
router.get('/excluir/locacao/:idLocacao', V_session, LocacaoController.removeLocacao)
router.post('/excluir/locacao/:idLocacao', LocacaoController.removeLocacao)

module.exports = router;
