const express = require('express');
const router = express.Router();

const LocacaoController = require('../controllers/locacaoController');




//LISTAR TODOS OS CLIENTES CADASTRADOS
router.get('/view/locacao', LocacaoController.allLocacao)


//ADICIONAR CLIENTE
router.get('/cadastro/locacao', LocacaoController.newLocacao)
router.post('/cadastro/locacao', LocacaoController.newLocacaoSave)

//ATUALIZAR CLIENTE
router.get('/editar/locacao/:id', LocacaoController.updateLocacao)
router.post('/editar/locacao/:id', LocacaoController.updateLocacaoSave)


//EXCLUIR CLIENTE
router.get('/excluir/locacao/:id', LocacaoController.removeLocacao)
router.post('/excluir/locacao/:id', LocacaoController.removeLocacao)

router.post('/buscar/cliente', LocacaoController.buscaCliente)
router.post('/buscar/veiculo', LocacaoController.buscaVeiculo)

module.exports = router;
