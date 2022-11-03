const express = require ("express");
const db = require ("../database");

const router = express.Router();

router.post("/usersauth",async (req,res)=>{
    const user = req.body;
    console.log(user);
    const userid = await db.select("IdUsuario").from("Usuario").where({Login: user.Login,Senha:user.Senha}).first();
    if(userid){
        return res.status(200).json({message:"Usuario Verificado.",userid:userid});
    }
    return res.status(400).json({message:"Combinacao usuario e senha incorreta"});
});

module.exports=router;