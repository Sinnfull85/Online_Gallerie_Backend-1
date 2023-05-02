const userData = require('../models/users')
const {ErrorResponse} = require('../tools/ErrorResponse')
const {asyncHandler} = require('../tools/asyncHandler')
const {createJWT} = require('../tools/auth')
const {hashPassword} = require('../tools/auth')

const {comparePasswords} = require('../tools/auth')

const signUp = asyncHandler(async (req, res, next) => {
  const {
    body: { email, password, ...rest }
  } = req
  const found = await userData.findOne({ email })
  if (found) throw new Error('User already exists', 400)
  const hash = await hashPassword(password)

  const user = await userData.create({
    ...rest,
    email,
    password: hash
  })
  const token = createJWT(user._id)
  res.json({ token })
})

const signIn = asyncHandler(async (req, res) => {
  const {
    body: { email, password }
  } = req
  const found = await userData.findOne({
    email: email
  }).select('+password')
  if (!found) throw new ErrorResponse("User doesn't exists", 404)
  const isValid = comparePasswords(password, found.password)
  if (!isValid) throw new ErrorResponse('Incorrect password', 401)
  const token = createJWT(found._id)
  res.json({ token })
})

const getUser = asyncHandler(async (req, res) => {
  const { userId } = req
  const user = await userData.findById(userId)
  res.status(201).json(user)
})

module.exports = {
  signUp,
  signIn,
  getUser
}
