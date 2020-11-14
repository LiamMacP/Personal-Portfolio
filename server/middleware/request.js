const apiEndpointNotFound = (req, res, next) => {
    return res.status(404).json(
        {
            message: 'Not Found',
            status: 404
        }
    )
}

module.exports = { apiEndpointNotFound }; 
