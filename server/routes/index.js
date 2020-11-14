const { apiEndpointNotFound } = require('../middleware/request');
const apiRouter = require('./api/index')

const router = require('express').Router();

router.use('/api', apiRouter);

module.exports = router;
