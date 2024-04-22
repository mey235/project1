import React, { useContext } from "react"
import card from "./vegtabe.jpg"
import cardsf from "./lemon-32.jpg"
import "./productlist.css"
import { useState,useEffect } from "react";
import ima from "./images"
import Navbar from "./navbar";
import { useSearch } from "./pages/search";
import {UserChangeContext} from "./pages/Usercontext";
import Register from "./pages/register";
import Login from "./pages/login"; 
import { useParams } from "react-router-dom";
import {CartChangeContext} from "./pages/cartContext";
import Footer from "./pages/footer";
let groupedData = {};
const Product=()=>
{
  const {cartItems, addItem, RemoveItem} = CartChangeContext();
  const {User}=UserChangeContext();
   const {category} = useParams();
   const [products, Getproducts] = useState([]);
   const {searchQuery}= useSearch();
   const [price,setprice]=useState(1);
   const[window,setwindow]=useState({"register":false,"login":false});
   console.log(User)

   const toggleWindow = (window) => {
    setwindow(prevstate=>(
      {
        ...prevstate,
        [window]:!prevstate[window]
        
      }
    )
  )
   console.log(window);
   }
    

   const Query=searchQuery;
  let det=[];
  
  const change=(searchvalue)=>
  {
     Getproducts(searchvalue)
  }
  useEffect(() => {
   // Fetch data when the component mounts
   get();
 }, [searchQuery]);
  const get= async()=>
  {
   
    
   console.log(searchQuery)
   let searchproducts;
   if (searchQuery && searchQuery.trim() !== '') {
     const response = await fetch(`http://localhost:5321/api/places/${searchQuery}`);
     searchproducts = await response.json();
     if(searchproducts.use==null)
     {
      const response = await fetch(`http://localhost:5321/api/places/all`);
      searchproducts = await response.json();
      
     }
   } else {
      
     const response = await fetch(`http://localhost:5321/api/places/all`);
     searchproducts = await response.json();
   }
 
   
 
   Getproducts(searchproducts.use);
  
   if(searchproducts.use.length>0)
   {
  groupedData = {};
   searchproducts.use.forEach(dataItem => {
      if (!groupedData[dataItem.category]) {
        groupedData[dataItem.category] = [];
      
      }
      groupedData[dataItem.category].push(dataItem);
    });
    console.log(groupedData);
  }

 
   
   

  }
  const Setprice=(e)=>
  {
      const b=parseInt(e.target.value);
      setprice(b*price);
  }
   const getproducts=()=>
   {
   
      return(
          <div>
          {Array.isArray(products) ?(<div>
            {Object.entries(groupedData).map(([category, categoryItems]) => (
              <div>
                <h2 className="cathead">{category}</h2>
                <div className="but">
                  {categoryItems.map((dataItem, index) => (
                    <div key={index} className="cards">
                      <img className="proimg" src={ima.vegetable} alt="asdas" />
                      <div className="colum">
                        <h2>{dataItem.name}</h2>
                        <select onChange={Setprice}>
                          <option value={1}>500g</option>
                          <option value={2}>1000g</option>
                          <option value="option3">Option 3</option>
                        </select>
                        <p className="price">Price:  {dataItem.price}Rs</p>
                        <button className="buybutton" onClick={() => User.name? (addItem(dataItem),console.log(cartItems),alert("added to cart")):toggleWindow("login") }>Buy Now</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          ):( 
            <div>
               <h2 className="cathead">{products.category}</h2>
                <div className="but">
      <div className="cards">
          <img className="proimg" src={ima.vegetable} alt="asdas" />
          <div className="colum">
            <h2>{products.name}</h2>
            <select onChange={Setprice}>
              <option value={500}>500g</option>
              <option value={1000}>1000g</option>
              <option value="option3">Option 3</option>
              <option value="option3">Option 3</option>
            </select>
            <p className="price">{price}</p>
            <button className="buybutton" onClick={() => User.username? (addItem(products),console.log(cartItems),alert("added to cart")):toggleWindow("login")}>Buy Now</button>
          </div>
          </div>
        </div>
        </div>
   )}
   </div>
 
      );
         


}

      

  

   return(
      <div>
          
      {(category == "none") ? (
          
           <div>
        
           {getproducts()}
          
           
          </div>
       ) : ( <div>
         <h1 className="cathead">{category}</h1>
         {getproducts()} </div>)}
         
    {window["register"] && <Register  onClose={() => toggleWindow("register")}/>}
    {window["login"] && <Login onClose={() => toggleWindow("login")} onRegister={() => toggleWindow("register")}/>}
   
    </div>
   
    )
  
}
export default Product;
