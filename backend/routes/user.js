const express = require('express');
const User =  require('../models/users');
const fs = require('fs');
 const router = express.Router(); 
 const bcrypt = require('bcrypt');
 const multer = require('multer');
 
 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     
        const uploadDir = 'C:/react/first/public/imageses'; // Specify the destination directory
        
        cb(null, uploadDir);
      },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  const upload = multer({ storage: storage });
 router.get("/all", async (req,res,next)=>
 {
    let de = req.params.pid;
    let use=[];
    let count=0;
    try
    {
       
            use= await User.find();
        
        
 
    }
    catch(error)
    {
        console.log(error)
    }
  
    res.json({use});
 })
 

 router.post("/image", upload.single('image'),(req,res,next)=>{
 try {
    res.json({ success: true, message: 'User created successfully' });
    console.log(req.file.path)
 }
 catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Error uploading file' });
  }})
 router.post("/po",upload.single('image'), async (req,res,next)=>
 {
    const {name,email,password}=req.body;
    const image=req.file.path;
    encrypassword =  await bcrypt.hash(password,10);
    console.log(req.file.path);
    const plaer= new User(
        {
              name,
              email,
              encrypassword,
              image
              
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
 router.get("/:pid/:password", async (req,res,next)=>
 {
    let de = req.params.pid;
    let pe = req.params.password;
    const encryppe= await bcrypt.hash(pe,10)
    console.log(encryppe)
    let use=[];
    try
    {
        use=await User.findOne({name:de})
       
        const passwordMatch = await bcrypt.compare(pe, use.encrypassword);
        if (passwordMatch) {
          res.json(use);
      } else {
          // Passwords don't match, authentication failed
          console.log('Authentication failed');
          // Do something (e.g., return an error response)
          return res.status(401).json({ message: 'Authentication failed' });
      }
    }
    catch(error)
    {
        console.log(error);
    }
    
 })
 module.exports=router;