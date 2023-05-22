const express = require('express');
const router = express.Router();

const LocacaoController = require('../controllers/locacaoController');



router.get('/view/locacao', LocacaoController.allLocacao)

router.get('/buscar-cliente/:cpf', LocacaoController.buscarCliente);
router.get('/buscar-veiculo/:placa', LocacaoController.buscarVeiculo);


//ADICIONAR CLIENTE
router.get('/cadastro/locacao', LocacaoController.newLocacao)
router.post('/cadastro/locacao', LocacaoController.newLocacaoSave)

//ATUALIZAR CLIENTE
router.get('/editar/locacao/:idLocacao', LocacaoController.updateLocacao)
router.post('/editar/locacao/:idLocacao', LocacaoController.updateLocacaoSave)

//DETALHES LOCAÇÃO
router.get('/detalhes/locacao/:idLocacao', LocacaoController.detalhesLocacao)

//EXCLUIR CLIENTE
router.get('/excluir/locacao/:idLocacao', LocacaoController.removeLocacao)
router.post('/excluir/locacao/:idLocacao', LocacaoController.removeLocacao)

module.exports = router;
