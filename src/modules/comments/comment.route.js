import  Router  from "express";
import * as commentController from './controller/comment.controller.js'
const router=Router()
router.post('/addComment',commentController.addComment)
router.get('/allComments',commentController.allComents)
router.get('/usersData',commentController.userWithPostsAndComments)
router.put('/update/:id',commentController.update)
router.delete('/delete/:id',commentController.deleteComment)

export default router