import React  from "react";
import "./contactus.css"
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { UserChangeContext } from "./Usercontext";

const Contact = ()=>
{
 const onhandleform= async (e)=>
 {
      e.preventDefault();
      const data ={
       "name": e.target.name.value,
       "lastname": e.target.lastname.value,
       "email":e.target.email.value,
       "feedback":e.target.feedback.value
      }
      console.log(data)
      try{
      const response = await fetch("http://localhost:5321/api/fee/feed",
      {
        headers: {
          "Content-Type": "application/json" // Specify JSON content type
        },
        method:"POST",
        body:JSON.stringify(data)
      })
      console.log(response);
    }
    catch(error)
    {
      console.log(error);
    }
 }
return(
    <div className="contain">
    <div className="block1">
    <h1>Contact</h1>
    <h2>Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.</h2>
    </div>
    
    <div className="block2">
        <form onSubmit={onhandleform}>
        <div style={{display:'flex'}}>
        <div style={{display:'flex',flexDirection:"column"}}>
        <label>First Name</label>
        <input  name="name" className="input-box" type="text" placeholder="Enter your name" required/>
        </div>
        <div style={{display:'flex',flexDirection:"column",marginLeft:'40px'}}>
        <label>Last Name</label>
        <input  className="input-box" name="lastname" type="text" placeholder="Enter your last name" required/>
        </div>
      </div>
      <label>Email</label>
        <input className="input-box" name="email" type="text" required/>
        <label>What can i help you with?</label>
        <textarea name="feedback" ></textarea>
        <input className="inputbutton" type="Submit" value="Submit"/>
        </form>
    </div>
    </div>
)

}
export default Contact;