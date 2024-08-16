import  Router  from "express";
import * as postController from "./controller/post.controller.js";
const router=Router()
router.post('/addPost',postController.addPost)
router.get('/allPosts',postController.allPosts)
router.get('/specificPost/:author',postController.specificPost)
router.put('/update/:id',postController.update)
router.delete('/delete/:id/:UserId',postController.deletePost)

export default router