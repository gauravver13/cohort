const jwt = require("jsonwebtoken")
const { JWT_USER_PASSWORD } = require("../config")


async function userMiddelware(req, res, next) {
    const token = req.header.token 
    // || req.cookies.token
    const decodedToken = jwt.verify(token, JWT_USER_PASSWORD)

    if(decodedToken) {
        req.userId = decodedToken.id;
        next()
    } else {
        res.status(401).send({
            message: "Please Sign in before you proceed"
        });
    }
}

module.exports = {
    userMiddleware: userMiddelware
}