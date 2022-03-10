const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization; 
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY); 
        const users_idusers = decodedToken.userId;
        req.auth = { users_idusers }; 
        if (Number(req.body.users_idusers) && Number(req.body.users_idusers) !== users_idusers) { 
            throw '403: unauthorized request'; 
        } else { 
            next(); 
        }
    } catch (error) {
        res.status(401).json({ error: 'Requête non authentifiée !' });
    }
};