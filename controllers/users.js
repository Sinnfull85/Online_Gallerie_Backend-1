const userData = require('../models/users')
const { ErrorResponse } = require('../tools/ErrorResponse')
const { asyncHandler } = require('../tools/asyncHandler')
const { createJWT } = require('../tools/auth')
const { hashPassword } = require('../tools/auth')
const usersTaste = require('../models/usersTaste')

const { comparePasswords } = require('../tools/auth')

const signUp = asyncHandler(async (req, res, next) => {
  const {
    
    body: { email, password, ...rest }
  } = req
  const found = await userData.findOne({ email })
  if (found) throw new Error('User already exists', 400)
  const hash = await hashPassword(password)
console.log(22333)
  const user = await userData.create({
    ...rest,
    email,
    password: hash
  })
  const token = createJWT(user._id)
  console.log(user)
  res.json({ token })
})

const signIn = asyncHandler(async (req, res) => {
  const {
    body: { email, password }
  } = req
  const found = await userData
    .findOne({
      email: email
    })
    .select('+password')
  if (!found) throw new ErrorResponse("User doesn't exists", 404)
  const isValid = comparePasswords(password, found.password)
  if (!isValid) throw new ErrorResponse('Incorrect password', 401)
  const token = createJWT(found._id)
  res.json({ token })
})

const getUser = asyncHandler(async (req, res) => {
  const { userId } = req
  const user = await userData.findById(userId)
  res.status(200).json(user)
})

const deleteUser =asyncHandler(async (req, res) => {
    const { userId } = req
    console.log("deleete")
    // const user = await userData.findById(userId)
    await userData.deleteOne({_id:userId})
    res.json({ success: `User with id of ${userId} was deleted` });
  })

const likeIt = asyncHandler(async (req, res) => {
  const {
    userId,
    body: { paintingId, paintingTitle, paintingUrl, liked }
  } = req
  if (liked) {
    await usersTaste.create({
      userId,
      paintingId,
      paintingTitle,
      paintingUrl
    })
  } else {
    await usersTaste.deleteMany({
      paintingId: paintingId,
      userId: userId,
      paintingTitle: paintingTitle,
      paintingUrl: paintingUrl
    })
  }

  res.send('like it!')
})

const getLikeIt = asyncHandler(async (req, res) => {
  // const {
  //     userId,
  //     params: {  id }
  //   } = req

  const userId = req.userId
  const paintingId = req.params.id

  const user = await usersTaste.find({ userId: userId, paintingId: paintingId })
  res.status(200).json(user)
})

const getAllLiked = asyncHandler(async (req, res) => {
  const userId = req.userId

  const user = await usersTaste.find({ userId: userId })
  console.log(user)
  res.status(200).json(user)
})


module.exports = {
  signUp,
  signIn,
  getUser,
  likeIt,
  getLikeIt,
  getAllLiked,
  deleteUser
}
