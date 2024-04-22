const express = require('express');
const Order =  require('../models/order');
 const router = express.Router(); 
 
 router.get("/", async (req,res,next)=>
 {
    let use=[];
   
    try
    {
       
            use= await Order.find();
        
        
     count = await Order.countDocuments();
    }
    catch(error)
    {
        console.log(error)
    }
  
    res.json({use});
 })
 module.exports=router;