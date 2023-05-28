const {CustomApiError} = require('../../errors/custom-errors')

const errorHandler = (err, req, res, next) => {
    err instanceof CustomApiError? res.status(err.StatusCode).json({msg: err.message}) :  res.status(500).json({ msg: 'Something went wrong, try again'})
}

module.exports = errorHandler