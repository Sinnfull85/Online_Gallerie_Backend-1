const { Router } = require('express')
const userRouter = Router()
const { protect } = require('../middlewares/auth')
const { likeIt,getLikeIt,getAllLiked } = require('../controllers/users')


userRouter.post('/like', protect, likeIt)
.get("/like/:id",protect,getLikeIt)
.get("/like",protect,getAllLiked)

module.exports = userRouter
