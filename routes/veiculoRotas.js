const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

router.get('/', veiculoController.getAll);
router.get('/:id', veiculoController.getOne);
router.post('/', veiculoController.create);
router.put('/:id', veiculoController.update);
router.delete('/:id', veiculoController.delete);



module.exports = router;
