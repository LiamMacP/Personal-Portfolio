const { logger } = require("../utils/logger");

const apiEndpointNotFound = (req, res, _) => {
    logger.error("Invalid endpoint request", { endpoint: req.originalUrl })

    return res.status(404).json(
        {
            message: 'Not Found',
            status: 404
        }
    )
}

const initialiseRequest = (req, _, next) => {
    logger.info('Request received', { method: req.method, endpoint: req.originalUrl });
    next();
}

module.exports = { apiEndpointNotFound, initialiseRequest }; 
