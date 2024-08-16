import userRouter from'./modules/users/user.route.js'
import postRouter from'./modules/posts/post.route.js'
import commentRouter from './modules/comments/comment.route.js'
import sequelize from '../database/connection.js'
const bootstrap=(app,express)=>{
    sequelize.sync({alter:false})
    app.use(express.json())
    app.use('/users',userRouter)
    app.use('/posts',postRouter)
    app.use('/comments',commentRouter)
    app.use('*',(req,res,next)=>{
        res.json({message:"url not found !"})
    })
}
export default bootstrap