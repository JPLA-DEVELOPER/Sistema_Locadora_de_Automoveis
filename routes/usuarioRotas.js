const express = require('express');
const router = express.Router();


const UsuarioController = require('../controllers/usuarioController');


//LISTAR TODOS OS USUÁRIOS CADASTRADOS
router.get('/', UsuarioController.allUsuario)


//ADICIONAR VEÍCULO
router.get('/cadastro/usuario', UsuarioController.newUsuario)
router.post('/cadastro/usuario', UsuarioController.newUsuarioSave)


//ATUALIZAR VEICULO
//router.get('/editar/veiculo/:id', VeiculoController.updateVeiculo)
//router.post('/editar/veiculo/:id', VeiculoController.updateVeiculoSave)


//EXCLUIR VEÍCULOS
//router.get('/excluir/veiculo/:id', VeiculoController.removeVeiculo)
//router.post('/excluir/veiculo/:id', VeiculoController.removeVeiculo)

module.exports = router;
