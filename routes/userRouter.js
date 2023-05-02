const { Router } = require('express')
const userRouter = Router()
const { protect } = require('../middlewares/auth')
const { likeIt,getLikeIt } = require('../controllers/users')


userRouter.post('/like', protect, likeIt)
.get("/like/:id",protect,getLikeIt)

module.exports = userRouter
