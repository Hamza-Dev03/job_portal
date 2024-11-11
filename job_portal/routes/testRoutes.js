import express from 'express'
 
import {testController} from '../controllers/testcontroller.js';
import userAuth from '../middelwares/authMiddelware.js';

//router object
const router = express.Router();

//routes
router.post('/',userAuth,testController)

//export router

export default router;  

