import { where } from 'sequelize';
import userModule from './../../../../database/models/users.model.js';
import bcryptjs from 'bcryptjs'

//signUp
export const signUP=async(req,res,next)=>{
    const {email,password}=req.body 
    const userExist=await userModule.findOne({
        where:{
            email
        }
    })
    // console.log(userExist);
    if(userExist){
        return res.status(409).json({message:"email already exist "})
    }
        req.body.password=bcryptjs.hashSync(password,8)
        const newUser=await userModule.create(req.body)
        return res.status(201).json({message:"user is created",newUser})
    
}

//login 
export const login=async(req,res,next)=>{
    const{email,password}=req.body
    const userExist=await userModule.findOne({
        where:{
            email
        }
    })
    console.log(userExist);
    
    if(userExist){
        const match=bcryptjs.compareSync(password,userExist.password)
        if(match){
            const login=await userModule.update({loginStatus:true},{
                where:{
                    email
                }}
            )
            return res.status(200).json({message:"login succefully",usedID:userExist.id})
        }
        return res.status(400).json({message:"invalid email or password !"})
    }
    return res.status(400).json({message:"invalid email or password !"})
    
}


//logout
export const logout=async(req,res,next)=>{
    const{id}=req.params
    const logout=await userModule.update({loginStatus:false},{
        where:{
            id
        }})
        return res.status(200).json({message:"logout succefully",usedID:logout.id})

}