const express = require ("express");
const db = require ("../database");

const router = express.Router();

router.get("/users",async(req,res)=>{
  const user = await db.select().from("Usuario");
  console.log(user);
  return res.json(user);
})

router.post("/users",async(req,res)=>{
    const user = req.body;
    const verification = await db.select().from("Usuario").where("Login",user.Login).first();
    if(verification){
        return res.status(400).json({message:"Usuario já existe."});
    }
    await db('Usuario').insert(user);
    return res.status(200).json({message:"Usuario cadastrado."});
})

module.exports=router;