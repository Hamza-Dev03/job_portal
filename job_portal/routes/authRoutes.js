
import express from 'express'
import { authUser, loginController } from '../controllers/authController.js'

const router = express.Router()

// register || post
router.post('/register',authUser)

//login || post
router.post('/login',loginController)


export default router ;