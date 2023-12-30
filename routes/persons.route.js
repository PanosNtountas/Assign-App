const express = require('express');
const router = express.Router();
const personsController = require('../controllers/persons.controller');

router.get('/', personsController.findAll);
router.post('/', personsController.create);
router.delete('/:personID', personsController.delete);

module.exports = router;