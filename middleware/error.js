const errorHandler = (err, req, res, next) => {
    console.log(err.stack.red)

    res.status(500).json({
        success: true,
        msg: err.message
    })
}

module.exports = errorHandler;