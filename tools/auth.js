var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const hashPassword =(password)=>{
    return bcrypt.hash(password,5)
}

const comparePasswords=(password,hash)=>{
    return bcrypt.hash(password,hash)
}

const createJWT=(id)=>{
    const token = jwt.sign({id:id},process.env.JWT_SECRET)
    return token;
}

module.exports = {
    hashPassword,comparePasswords,createJWT
    
  }