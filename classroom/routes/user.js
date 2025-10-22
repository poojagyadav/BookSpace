const express=require("express");
const router=express.Router();

//Users
//Index
router.get("/",(req,res)=>{
    res.send("GET for Users");
});
//Show
router.get("/:id",(req,res)=>{
    res.send("GET for Users id");
});
//post
router.post("/",(req,res)=>{
    res.send("Post for Users");
});
//Delete
router.delete("/:id",(req,res)=>{
    res.send("Delete for Users id");
});

module.exports=router;