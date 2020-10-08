const errorResponse = require('../utils/errorResponse')

const errorHandler = (err, req, res, next) => {
    let error = {...err}
    error.message = err.message
    console.log(err)
    if(err.name === 'CastError') { // mongoose bad id error
        message = `Bootcamp not found with id ${err.value}`
        error = new errorResponse(message, 404)
    }

    //mangoose duplicate key
    if(err.code === 11000) {
        const message = 'Duplicate field value'
        error = new errorResponse(message, 400)
    }

    // validator errors
    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map( val => val.message)
        error = new errorResponse(message, 400 )
    }

    res.status(error.statusCode || 5000).json({
        success: true,
        msg: error.message || 'Server Error.'
    })
}

module.exports = errorHandler;  