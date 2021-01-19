const express = require('express');
const router = express.Router();
const detailController = require('../controllers/detailController')

/* GET home page. */
router.get('/', detailController.detail);

// Editar
router.get('/detail/:id?', detailController.formEdit);
router.post('/detail/:id?', detailController.update);

module.exports = router;
