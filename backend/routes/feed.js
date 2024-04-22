const express = require('express');
const Feed =  require('../models/feedback');
 const router = express.Router(); 

 router.get("/feed",async(req,res,next)=>
{
    let feed=[]
    try {

        feed= await Feed.find();
        
    } catch (error) {
        console.log(error);
    }
    res.json({feed});
})
router.post("/feed",async(req,res,next)=>
{
    const {name,lastname,email,feedback}= req.body;
    const newfeed = new Feed({
        name,
        lastname,
        email,
        feedback
    })
    try {

       newfeed.save();
        
    } catch (error) {
        console.log(error);
    }
    res.json(newfeed);
})
module.exports=router;
