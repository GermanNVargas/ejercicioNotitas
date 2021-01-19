const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const notasController = require('../controllers/notasController');

// Home
router.get('/', mainController.index);

// Crear
router.get('/', notasController.create);
router.post('/', notasController.save);

// Borrar con destroy
router.delete('/:id', notasController.destroy);

module.exports = router;