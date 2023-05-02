const { Router } = require('express')
const authRouter = Router()
const {
  signUp,
  signIn,   
  getUser
} = require('../controllers/users')

const {protect}= require ("../middlewares/auth")

authRouter
.post('/signup', signUp)
.post("/signin",signIn)
.get("/me",protect,getUser)

module.exports = authRouter
