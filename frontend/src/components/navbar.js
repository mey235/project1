import React from "react";
import {Link} from "react-router-dom"
import car from "./vegtabe.jpg"
import stylesd from "./nav.module.css"
import Sideb from "./sidebar"
import { useState } from "react";
import img from "./images";
import { useSearch } from "./pages/search";
import TextField from '@mui/material/TextField';
import Register  from "./pages/register";
import { CartChangeContext } from "./pages/cartContext";
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { UserChangeContext } from "./pages/Usercontext";
const Navbar=()=>
{
    const{updateSearchQuery}= useSearch();
    const{searchQuery} = useSearch();
    const {cartItems}= CartChangeContext();
    const {User,updateUser}=UserChangeContext();
    const [showlogoutbox,setshowlogoutbox]=useState(false);
   const Loginboxvisiblity=()=>
    {
      setshowlogoutbox(!showlogoutbox);
    }
    const setcart = ()=>
    {
       updateUser({})
    }
    console.log(User)
    const top100Films =[ { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }];
    const[close,setclose]=useState(false);

    const toggleLoginWindow = () => {
       setclose((close) => !close);
     };
 
     const GetSearchProducts=(e)=>
     {

       
     updateSearchQuery(e.target.value)
     console.log(searchQuery)
     }
    const [side,onset]= useState(false);
    const toggleSidebar = () => {
        onset(!side);
      };
    return(
        <div>
            <ul className={stylesd.navlist}>
           
            <li className={stylesd.ad}>
            <button onClick={toggleSidebar}></button>  
                </li>  
                <li>
                {Object.keys(User).length !== 0 ? (
                   <div onMouseLeave={()=>{Loginboxvisiblity()}} onMouseEnter={()=>{Loginboxvisiblity()}}>
                  {showlogoutbox && (<div className={stylesd.logoutbox} onClick={()=>{console.log("dumbdown")}}><button onClick={setcart} >logout</button></div>)}
        <Link className={stylesd.prolink} to="/loginform">
          <img className={stylesd.pro} src={`/imageses/${User.image}`} alt="asdsdas" />
        </Link>
        </div>
      ) : (  
        
      <img className={stylesd.pro} onClick={()=>{alert("no User signed in")} }   src={img.profile} alt="asdsdas" /> )}
            </li>
            <li >
            {cartItems.length!=0?(<Link className={stylesd.prolink}  to="/cart">
                
                <img  className={stylesd.pro}src={img.cart} alt="asdsdas"></img>
                </Link>):( <img onClick={() => alert("Your cart is empty!")}  className={stylesd.pro}src={img.cart} alt="asdsdas"></img>)}
             
            </li>
            
            <li className={stylesd.ad}>
              <div className={stylesd.websitenamez}>NB GROCERIES
              </div>
            </li>
            <li className={stylesd.ad}>
            <form class={stylesd.searchform}>
          
            <input type="text" className={stylesd.in}  label="Search"
        placeholder="&#128269;Search..." onChange={GetSearchProducts}></input>
      
        
    </form>
            </li>
            <li>
                <Link to="/aboutus">About
                </Link>
            </li>
            <li>
                <Link to="/services">Contact
                </Link>
                  <ul className={stylesd.submenu}>
                 <li><a href="#">Service 1</a></li>
                 <li><a href="#">Service 2</a></li>
                   <li><a href="#">Service 3</a></li>
                     </ul>
            </li>
            <li>
                <Link to="/faq">FAQ
                </Link>
            </li>

            </ul>
            <Sideb data={side} onset={toggleSidebar}/>
            
            <img  className={stylesd.navimage}src={car} alt="asdsdas"></img>
            {
                close && (<Register  onClose={toggleLoginWindow}/>)
              }
          
            </div>
            
            
            
    )
}
export default Navbar