const express=require('express')
const{request, response}=require('express')
const router=express.Router()

const signUpTemplate=require("../model/Models")

router.post('/signup',(request,response)=> {
    const SingupUser=new signUpTemplate({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
    password:request.body.password

    })

    SingupUser.save().then(data=>{
    response.json(data)
    })

    .catch(error=>{
    response.json(error)
    })
})

module.exports=router