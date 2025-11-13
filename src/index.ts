
import express from 'express'
const app=express()
app.use(express.json())


import {PrismaClient} from "@prisma/client"
const client=new PrismaClient()

app.get("/users",async(req , res)=>{
    const users=await client.user.findMany()
    res.json({
        users
    })
})

app.get("/todos/:id",async(req , res)=>{
    const id=req.params.id 
    const user=await client.user.findFirst({
        where :{
            id:Number(id)
        },
        select:{
            todos:true,
            username:true,
            password:true

        }
    })
    res.json({
        user
    })
    
   
})

app.listen(3000)
async function createUser(){


//  await client.user.create({
//     data:{
//         username:"ayushi",
//         password:"123",
//         age:21,
       
//     }
    // ! if user want to delete
    // await client.user.delete({
    //     Where:{
    //         id:1
    //     }
    // })
    

    // ! if user want ot update
    
    // await client.user.update({
    //     where:{
    //         id:1
    //     },
    //     data:{
    //         username:"pari"
    //     }
    // })
    

    // ! if find 
    const user=await client.user.findFirst({
        where:{
            id:1
        },
        include:{
            todos:true
            // ab m todo manually add krunge
        }
        //  & agr sirf username chhye
        // select:{
        //     username:true
        // }
    })
    // console.log(user?.password)
    console.log(user)
    

    // rather than writing whole client.query
// })
}
createUser()

// auto complete kaafi cheezein milenge
// automat. types pta chl jaenge

