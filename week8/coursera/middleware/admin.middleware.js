const jwt = require('jsonwebtoken')
const { JWT_ADMIN_PASSWORD } = require('../config')


async function adminMiddleware(req, res, next) {
    const token = req.headers.token
    // || req.cookies.token
    
    const decodedToken = jwt.verify(token, JWT_ADMIN_PASSWORD);

    if(decodedToken) {
        req.userId = decodedToken.id;
        next()
    } else {
        res.status(403).send({
            message: "you are not signed in"
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}