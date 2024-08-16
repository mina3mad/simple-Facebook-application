import { Model } from 'sequelize';
import commentModule from '../../../../database/models/comments.model.js';
import postModule from './../../../../database/models/posts.model.js';
import userModule from './../../../../database/models/users.model.js';

//add comment
export const addComment=async(req,res,next)=>{
    const {UserId,PostId}=req.body
    const user=await userModule.findOne({where:{id:UserId,loginStatus:true}})
    const post=await postModule.findOne({where:{id:PostId}})
    if(user){
        if(post){
            const comment=await commentModule.create(req.body)
            return res.status(201).json({message:"comment added succefully",comment})
    
        }
    return res.status(404).json({message:" post not found"})
        
    }
    return res.status(404).json({message:"user not found or not logged in"})
}

//get all comments
export const allComents=async(req,res,next)=>{
    const comments=await commentModule.findAll()
    return res.status(200).json({message:"all comments:",comments})

}

//update comment
export const update=async(req,res,next)=>{
    const{id}=req.params
    const{UserId,PostId}=req.body
    const update =await commentModule.update(req.body,{where:{id,UserId,PostId}})
    return update[0]? res.status(200).json({message:"comment updated",update}):res.status(404).json({message:"not found"})
}

//delete comment
export const deleteComment=async(req,res,next)=>{
    const{id}=req.params
    const{UserId,PostId}=req.body
    const deleted =await commentModule.destroy({where:{id,UserId,PostId}})
    return deleted? res.status(200).json({message:"comment deleted",deleted}):res.status(404).json({message:"not found"})
}


//get a specific user with a specific post and post’s comments.
export const userWithPostsAndComments=async(req,res,next)=>{
    const users=await userModule.findAll({
        include:{model:postModule,attributes:{exclude:['UserId']},include:{
            model:commentModule,attributes:{exclude:['UserId','PostId']}
        }}
    })
    return res.status(200).json({message:"all users with their posts and comments is:",users})

}