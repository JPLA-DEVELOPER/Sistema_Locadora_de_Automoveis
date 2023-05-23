const express = require('express');
const router = express.Router();


const ClienteController = require('../controllers/clienteController');


//LISTAR TODOS OS CLIENTES CADASTRADOS
router.get('/view/clientes', ClienteController.allCliente)


//ADICIONAR CLIENTE
router.get('/cadastro/cliente', ClienteController.newCliente)
router.post('/cadastro/cliente', ClienteController.newClienteSave)

//ATUALIZAR CLIENTE
router.get('/editar/cliente/:idCliente', ClienteController.updateCliente)
router.post('/editar/cliente/:idCliente', ClienteController.updateClienteSave)


//EXCLUIR CLIENTE
router.get('/excluir/cliente/:idCliente', ClienteController.removeCliente)
router.post('/excluir/cliente/:idCliente', ClienteController.removeCliente)




module.exports = router;
