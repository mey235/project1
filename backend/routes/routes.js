 const express = require('express');
const Products =  require('../models/product');
 const router = express.Router();
 const Razorpay = require('razorpay');

 router.get("/all", async (req,res,next)=>
 {
    let de = req.params.pid;
    let use=[];
    let count=0;
    try
    {
       
            use= await Products.find();
        
        
     count = await Products.countDocuments()
    }
    catch(error)
    {
        console.log(error)
    }
  
    res.json({use});
 })
 router.get("/:pid", async (req,res,next)=>
 {
    let de = req.params.pid;
    let use=[];
    let count=0;
    try
    {
       
            use= await Products.findOne({$or: [
                { name: { $regex: new RegExp(`${de}`, "i") } }, // Search by name
                { category: { $regex: new RegExp(`${de}`, "i") } }, // Search by category
              ],})
        
        
     count = await Products.countDocuments()
    }
    catch(error)
    {
        console.log(error)
    }
  
    res.json({use});
 })
 router.post("/:pid",(req,res,next)=>
 {
    const {name,email,category}=req.body;
    const plaer= new Products(
        {
              name,
              email,
              category
        }
    )
    try
    {
     plaer.save();
    }
    catch(error)
    {
        console.log(error)
    }
    res.status(201).json({ place: plaer });

    
 })


 module.exports=router;