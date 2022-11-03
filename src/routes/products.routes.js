const express = require ("express");
const db = require ("../database");

const router = express.Router();

router.get("/products",async(req,res)=>{
    const {page, limit} = req.query;
    const offset = page==0 ? page : limit * page;
    const pagination = await db.select().from("Produto").limit(limit).offset(offset);
    return res.json(pagination);
})

router.get("/products/:productname",async(req,res)=>{
    const { productname } = req.params;
    const {page, limit} = req.query;
    const offset = page==0 ? page : limit * page;
    const pagination = await db.select().from("Produto").whereILike("NomeProduto",`%${productname}%`).limit(limit).offset(offset);
    return res.json(pagination);
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

router.patch("/products",async(req,res)=>{
    const user = req.body;
    await db("produto").update(user).where("IdProduto",user.IdProduto);
    return res.status(200).json({message:"Produto Atualizado."});
})

router.delete("/products",async(req,res)=>{
    const user = req.body;
    await db("produto").delete(user).where("IdProduto",user.IdProduto);
    return res.status(200).json({message:"Produto Deletado."});
})

module.exports=router;