const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobs.controller');

router.get('/', jobsController.findAll);
router.post('/', jobsController.create);
router.delete('/:name', jobsController.delete);

module.exports = router;