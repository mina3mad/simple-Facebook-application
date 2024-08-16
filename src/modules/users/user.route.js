import  {Router}  from "express";
import * as userController from "./controller/user.controller.js";
const router=Router()
router.post('/signUp',userController.signUP)
router.post('/login',userController.login)
router.put('/logout/:id',userController.logout)
export default router