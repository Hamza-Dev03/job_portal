import express from "express"
import { deleteUserController, getUserController, updateUserController } from "../controllers/userController.js";
import userAuth from "../middelwares/authMiddelware.js";

//router object
const router = express.Router()

//routes 

//get user || get
router.get("/get-user/",userAuth,getUserController)

//update user || put
router.put("/update-user",userAuth,updateUserController)

//delete user || Delete
router.delete("/delete-user",userAuth
    ,deleteUserController)



export default router;