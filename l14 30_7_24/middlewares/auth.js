const jwt = require("jsonwebtoken")
const auth = (req, res, next) => {
    try {
        const accessToken = req.cookies.access_token
        const { id } = jwt.verify(accessToken, process.env.SECRET_KEY);
        req.id = id;
        next();
    } catch (error) {
        return res.status(401).send("unauthorized")
    }
}


module.exports = auth;