const jwt = require("jsonwebtoken")


const auth = (req, res, next) => {
    try {
        const accessToken = req.cookies.access_token
        if (!accessToken) throw "unauthorized";
            const { id,role } = jwt.verify(accessToken, process.env.SECRET_KEY);
        req.id = id;
        req.role=role;
        next();
    } catch (error) {
        return res.status(401).send("unauthorized")
    }
}

const authAdmin = (req, res, next) => {
    try {
        if(req.role!="admin") throw "forbidden";
        next();
    } catch (error) {
        return res.status(401).send(error)
    }
}






module.exports = {auth,authAdmin};