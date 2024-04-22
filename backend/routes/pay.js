const express = require('express');
 const Razorpay = require('razorpay');
 const { key_id, key_secret } = require('../keys/keys');
 const rout = express.Router();
 const razorpay = new Razorpay({
    key_id: key_id,
    key_secret: key_secret,
  });
 rout.post("/createse-order",async (req,res,next)=>
 {
   const {amount}= req.body
   console.log(req.body);
    const options = 
    {
        amount:amount * 100, 
        currency: 'INR',
    }
    try
    {
        const order= await razorpay.orders.create(options);
        res.json(order);
    }
    catch(error)
    {
        console.log(error)
    }
   
})
 module.exports = rout;