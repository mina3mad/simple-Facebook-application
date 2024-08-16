import { where } from 'sequelize';
import postModule from './../../../../database/models/posts.model.js';
import userModule from './../../../../database/models/users.model.js';


//add post 
export const addPost=async(req,res,next)=>{
    const {UserId}=req.body
    const user=await userModule.findOne({where:{id:UserId,loginStatus:true}})
    if(user){
        const post=await postModule.create(req.body)
        return res.status(201).json({message:"post added succefully"})

    }
    return res.status(404).json({message:"user not found or not logged in"})
}

//get all posts
export const allPosts=async(req,res,next)=>{
    const posts=await postModule.findAll()
    return res.status(200).json({message:"all posts:",posts})

}

//get specific post with the author
export const specificPost=async(req,res,next)=>{
    const{author}=req.params
    const post=await postModule.findOne({where:{author}})
    if(post){
        return res.status(200).json({message:"the post is:",post})
    }
    return res.status(404).json({message:"post is not found"})


}
//update post
export const update=async(req,res,next)=>{
    const{id}=req.params
    const{UserId}=req.body
    const update =await postModule.update(req.body,{where:{id,UserId}})
    return update[0]? res.status(200).json({message:"post updated",update}):res.status(404).json({message:"not found"})
}

//delete post
export const deletePost=async(req,res,next)=>{
    const{id,UserId}=req.params
    const deleted =await postModule.destroy({where:{id,UserId}})
    return deleted? res.status(200).json({message:"post deleted",deleted}):res.status(404).json({message:"not found"})
}