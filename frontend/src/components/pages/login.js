import React  from "react";
import "./login.css"
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { UserChangeContext } from "./Usercontext";
import { dark } from "@mui/material/styles/createPalette";

const Loginform = ({onClose,onRegister})=>
{
    const {User}=UserChangeContext()
    const{updateUser}=UserChangeContext()
    console.log(User);
    const handleCloseAndRegister = () => {
      onClose();
      onRegister();
    }
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      let loginusername = e.target.username.value
      let pe =e.target.password.value
      console.log(loginusername);
      try {
      const response = await fetch(`http://localhost:5321/api/user/${loginusername}/${pe}`)
      const data = await response.json();
      if(data!=null)
      {  
       console.log(data.image)
       const imagePath = data.image;
      const filename = imagePath.split("\\").pop();
      const updatedUser =  { ...data, image: filename };
       await updateUser(updatedUser)
        console.log(User)
        onClose();
      }
      else
      {
        console.log("not a user");
        alert("Not a user");
      }
      
     
      }
      catch(error)
      {
        console.log(error)
      }
    }
        
    
 
    return (
        <div className="loginbox">
          <div style={{marginBottom:"20px"}}>Need an account to buy items</div>
          <button class="close-button" onClick={onClose}>&times;</button>
          <h1>Create Account</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            
  
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            name="password"
            required
          />
        </label>
       
        <h3>If you don't have a account register</h3>
        <br />
        
        <div>
        <button type="submit">Login</button>
        <button onClick={handleCloseAndRegister}>Register</button>
              
                </div>
      </form>
        </div>
      );
}
export default Loginform;
