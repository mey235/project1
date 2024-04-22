import React  from "react";
import "./register.css";
import {Link} from "react-router-dom"
import { useEffect } from "react";
import Navbar from "../navbar";
const Register=({onClose})=>
{
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', e.target.name.value);
      formData.append('email', e.target.email.value);
      formData.append('password',e.target.password.value)
      formData.append('image', e.target.image.files[0]);
      const response = await fetch('http://localhost:5321/api/user/po', {
        method: 'POST',
        body: formData
      });
      console.log(response)
    }
    catch (error) {
      console.log(error);
    }  
  }
return(
    <div>
      
    
    <div className="wrapper">
          <h2>Registration</h2>
         <button class="close-button" onClick={onClose}>&times;</button>
    <form  onSubmit={handleFormSubmit} >
      <div class="input-box">
        <input type="text" name="name" placeholder="Enter your name" required/>
      </div>
      <div class="input-box">
        <input type="text"  name="email" placeholder="Enter your email" required/>
      </div>
      <div class="input-box">
        <input type="password" name="password" placeholder="Create password" required/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Confirm password" required/>
      </div>
      <div class="input-box">
        <input type="file" name="image" accept="image/*"  required/>
      </div>
      <div class="policy">
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div class="input-box button">
        <input type="submit"  value="Register Now"/>
      </div>
      <div class="text">
        <h3>Already have an account? <a href="#">Login now</a></h3>
      </div>
    </form>
  </div>
  </div>
      );

}
export default Register;