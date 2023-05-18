const express = require('express');
const router = express.Router();


const UsuarioController = require('../controllers/usuarioController');


//LISTAR TODOS OS USUÁRIOS CADASTRADOS
router.get('/', UsuarioController.allUsuario)


//ADICIONAR USUÁRIOS
router.get('/cadastro/usuario', UsuarioController.newUsuario)
router.post('/cadastro/usuario', UsuarioController.newUsuarioSave)


// LOGIN
router.get('/login', UsuarioController.renderLogin);
router.post('/login', UsuarioController.processLogin);

// LOGOUT
router.get('/logout', UsuarioController.logout);

module.exports = router;
