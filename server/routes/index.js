const router = require('express').Router();
const { initialiseRequest } = require('../middleware/request');
const apiRouter = require('./api/index')

router.all('*', initialiseRequest);

router.use('/api', apiRouter);

module.exports = router;
