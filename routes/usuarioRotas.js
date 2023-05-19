const express = require('express');
const router = express.Router();


const UsuarioController = require('../controllers/usuarioController');



//LISTAR TODOS OS USUÁRIOS CADASTRADOS
router.get('/home', UsuarioController.home)
router.post('/home', UsuarioController.home)



//ADICIONAR USUÁRIOS
router.get('/cadastro/usuario', UsuarioController.newUsuario)
router.post('/cadastro/usuario', UsuarioController.newUsuarioSave)


// LOGIN
router.get('/', UsuarioController.renderLogin);
router.post('/', UsuarioController.processLogin);

// LOGOUT
router.get('/logout', UsuarioController.logout);

module.exports = router;
