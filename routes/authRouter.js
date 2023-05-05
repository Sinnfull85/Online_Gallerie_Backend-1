const { Router } = require('express')
const authRouter = Router()
const {
  signUp,
  signIn,   
  getUser,
  deleteUser
} = require('../controllers/users')

const {protect}= require ("../middlewares/auth")

authRouter
.post('/signup', signUp)
.post("/signin",signIn)
.get("/me",protect,getUser)
.delete("/me",protect,deleteUser)

module.exports = authRouter
