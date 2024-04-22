import React  from "react";
import "./profile.css";
import { useState,useEffect } from "react";
import Navbar from "../navbar";
import img from "../images"
import pro from "../image/profile.jpg";
import { UserChangeContext } from "./Usercontext";
const Profile = ()=>
{
  const [Filename, setFilename] = useState("");
  const {User}=UserChangeContext()
  const{updateUser}=UserChangeContext()
  let imag="";
  let ge = "" ;
  let filename=""
  const [inputVisible,setinputVisible]=useState(false);
  const [details,setdetails]=useState(
    {
      username:"",
      password:"",
      address:" "
    }
  )
  useEffect(() => {
    // Fetch data when the component mounts
    get();
  });
 
  const get= async()=>
  {
    
    imag=User.image;
    
  filename = imag.split('\\').pop();
  setFilename(filename)
console.log(filename);

    console.log(imag)
  }
  const handleinput =(e)=>
  {
    setdetails({
      ...details,
      [e.target.name]:e.target.value
    })
  }
  let de="sadsdasd";
  const handleinputvisible=()=>
  {
    setinputVisible(true);
  }
  const handleinputnotvisible=(e)=>
  {
    setinputVisible(false);
  }

  return(
  
    <div>
       <Navbar />
     <div>
   
    <img class ="profile-image" src={`/imageses/${Filename}`}/>
     </div>
     <br></br>
     <h1>Hello {User.name}</h1>
     <div>
      <div class="in">
      <label>{User.email}</label>
      {inputVisible ?(
      <input type="text" name="username" onChange={handleinput}onBlur={handleinputnotvisible}/>):(<h5>{details.username}</h5>)}
      <button onClick={handleinputvisible}>Change</button>
      </div>
      <br></br>
      <div class="in">
      <label>Password</label>
      {inputVisible ?(
      <input type="text" name="password" onChange={handleinput}onBlur={handleinputnotvisible}/>):(<h5>{details.password}</h5>)}
      <button onClick={handleinputvisible}>Change</button>
      </div>
      <div class="in">
      <label>Address</label>
      {inputVisible ?(
      <input type="text" name="address" onChange={handleinput}onBlur={handleinputnotvisible}/>):(<h5>{details.password}</h5>)}
      <button onClick={handleinputvisible}>Change</button>
      </div>

     </div>
     </div>
  );
}

export default Profile;