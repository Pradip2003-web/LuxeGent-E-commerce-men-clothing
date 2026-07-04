const jwt = require('jsonwebtoken');

exports.chekc_token=async (req,res,next) => {
    await jwt.verify(req.headers.authorization,'admin',next);
}