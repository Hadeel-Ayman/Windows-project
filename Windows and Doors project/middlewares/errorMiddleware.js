const ApiError = require("../utils/ApiError");

const handleError = () =>
    new ApiError('invalid Token, please login again ', 401)

const handleExpired = () =>
    new ApiError('Expired Token, please login again ', 401)

const globalError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error'

    if (process.env.NODE_ENV === 'development') {
        errorDev(err, res)
    } else if (process.env.NODE_ENV === 'production') {
        if (err.name == 'JsonWebTokenError') err = handleError()
        if (err.name == 'TokenExpiredError') err = handleExpired()
        errorProd(err, res)
    }
}


const errorDev = (err, res) => {
    return res.status(err.statusCode).send({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    })
}


const errorProd = (err, res) => {
    return res.status(err.statusCode).send({
        status: err.status,
        message: err.message,
    })
}

module.exports = globalError