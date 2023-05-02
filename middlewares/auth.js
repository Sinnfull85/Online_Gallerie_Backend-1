var jwt = require('jsonwebtoken');
const {asyncHandler} = require ("../tools/asyncHandler")
const {ErrorResponse} = require ("../tools/ErrorResponse")


const protect = asyncHandler(async (req, res, next) => {
    const bearer = req.headers.authorization;
    if (!bearer) throw new ErrorResponse('Please login', 401);
  
    const [, token] = bearer.split(' ');
  
    if (!token) throw new ErrorResponse('Not a valid token', 401);
  
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = user.id;
    next();
  });

  module.exports = {
    protect
    
  }