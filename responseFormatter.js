const responseFormatter = ( statusCode, data, message, res) => {
    res.status(statusCode).json({
        data,
        meta: {
            status_code: statusCode,
            message
        }
    })
    
}

module.exports = responseFormatter