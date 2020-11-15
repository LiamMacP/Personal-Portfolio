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

module.exports = { apiEndpointNotFound }; 
