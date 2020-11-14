const router = require('express').Router();
const { apiEndpointNotFound } = require('../../middleware/request');
const profileRouter = require('./profile')

router.use('/profile', profileRouter);

router.use(apiEndpointNotFound);

module.exports = router;
