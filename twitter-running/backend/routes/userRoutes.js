import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  resisterUser,
} from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/login').post(authUser)
router.route('/register').post(resisterUser)
router.route('/profile').get(protect, getUserProfile)

export default router
