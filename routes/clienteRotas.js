const express = require('express');
const router = express.Router();


const ClienteController = require('../controllers/clienteController');

const V_session = require('../middlewares/session')

//LISTAR TODOS OS CLIENTES CADASTRADOS
router.get('/view/clientes', V_session, ClienteController.allCliente)


//ADICIONAR CLIENTE
router.get('/cadastro/cliente', V_session, ClienteController.newCliente)
router.post('/cadastro/cliente', ClienteController.newClienteSave)

//ATUALIZAR CLIENTE
router.get('/editar/cliente/:idCliente', V_session, ClienteController.updateCliente)
router.post('/editar/cliente/:idCliente', ClienteController.updateClienteSave)


//EXCLUIR CLIENTE
router.get('/excluir/cliente/:idCliente', V_session, ClienteController.removeCliente)
router.post('/excluir/cliente/:idCliente', ClienteController.removeCliente)




module.exports = router;
