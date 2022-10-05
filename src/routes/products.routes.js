const express = require ("express");
const db = require ("../database");

const router = express.Router();

router.get("/products",async(req,res)=>{
    const user = await db.select().from("Produto");
    console.log(user);
    return res.json(user);
})

router.post("/products",async(req,res)=>{
    const user = req.body;
    const verification = await db.select().from("Produto").where("NomeProduto",user.NomeProduto).first();
    if(verification){
        return res.status(400).json({message:"Produto já existe."});
    }
    await db("Produto").insert(user);
    return res.status(200).json({message:"Produto cadastrado."});
})

module.exports=router;