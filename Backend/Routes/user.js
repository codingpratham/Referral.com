const express=require('express')
const router=express.Router()
const zod= require('zod')
const { User } = require('../db')


const signupBody=zod.object({
    firstName:zod.string(),
    lastName:zod.string(),
    email:zod.string().email().min(5).max(255),
    password:zod.string().min(8).max(255),
    confirmPassword:zod.string().min(8).max(255).ref('password')
})
router.post('/register',async(req,res)=>{
    try {
        const {success}= signupBody.safeParse(req.body)
        
        if(!success){
            res.status(411).json({
                msg:"Invalid"
            })
        }

        const existingUser=await User.findOne({
            email:req.body.email
        })

        if(existingUser){
            res.status(409).json({
                msg:"Email already exists"
            })
        }

        const user=new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            confirmPassword:req.body.confirmPassword
        })

    } catch (error) {
       console.log(error);
    }
})

module.exports={router}