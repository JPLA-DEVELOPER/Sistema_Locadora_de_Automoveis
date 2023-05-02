const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/clienteController');


//LISTAR TODOS OS CLIENTES CADASTRADOS
router.get('/view/clientes', ClienteController.allCliente)


//ADICIONAR CLIENTE
router.get('/cadastro/cliente', ClienteController.newCliente)
router.post('/cadastro/cliente', ClienteController.newClienteSave)

//ATUALIZAR CLIENTE
router.get('/editar/cliente/:id', ClienteController.updateCliente)
router.post('/editar/cliente/:id', ClienteController.updateClienteSave)


//EXCLUIR CLIENTE
router.get('/excluir/cliente/:id', ClienteController.removeCliente)
router.post('/excluir/cliente/:id', ClienteController.removeCliente)

module.exports = router;
