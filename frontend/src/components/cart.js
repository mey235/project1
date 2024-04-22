import React  from "react";
import Navbar from "./navbar";
import { useState,useEffect,useContext } from "react";
import CartContext from "./pages/cartContext";
import { CartChangeContext } from "./pages/cartContext";
import {Link} from "react-router-dom"
import  { Navigate } from 'react-router-dom'
import "./cart.css"
const Cart = ()=>
{
  const {cartItems, addItem, RemoveItem} = CartChangeContext()
  const [quantity,setQuantity]=useState([]);
  const [Sum,SetSum]=useState(0); 
  const [orderIds, setOrderId] = useState();
 


  let sum=0;
  const myData = {
    item: "asdasd",
   
  };
    const [data,setData] = useState([
        {
            id:1,nameed:"qsasad"
        },
        {
            id:24,nameed:"qsasadasdsad"
        }
    ])
    const getQuantity=(e,index)=>
    {
      setQuantity(prevQuantity => {
        const newQuantity = [...prevQuantity]; 
        newQuantity[index] = e.target.value;
        return newQuantity;
      });

    }
    const addsum=(sume)=>{

      SetSum(prevSum=>prevSum+sume.price);
      console.log(Sum)
    }
    useEffect(() => {
        // Fetch data when the component mounts
        get();

      },Sum);
    const get= async()=>
  {
   
   cartItems.map((item,index)=>
   {
    console.log(item)
    console.log(item.price);
    sum=sum+item.price;
    
   });
      SetSum(sum/2);
      console.log(Sum);
  }
 

 const order=async ()=>
 {
  console.log(Sum);
  const response = await fetch('http://localhost:5321/api/placed/createse-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode:"cors",
    body: JSON.stringify({
      "amount":Sum
     
    })
    
  });
  if (response.ok) {
    const responseData = await response.json(); 
    const orderId = responseData.id; 
    console.log(orderId); 
    setOrderId(orderId)
  }
 }
 const ode= async ()=>
 {
    
 }
  
 if (orderIds) {
  return <Navigate to="/payment" state={orderIds}/>
}
  
return(
  <div>
  <Navbar />
   <div className="cart">
    <table>
      <tbody>
        <tr>
        <th>Image</th>
          <th>Name</th>
          <th>description</th>
          <th>price</th>
          <th>quantity</th>
          <th></th>
          <th>Total price</th>
        </tr>
        {cartItems.map((items,index)=>(
        
      <tr key={index}>
            <td><div class="product-image">
      <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg"/>
    </div></td>
            <td><div class="product-title">Dingo Dog Bones</div></td>
             <td> <div class="product-description"><p>The best dog bones of all time. 
                Holy crap. Your dog will be begging for these things! 
                I got curious once and ate one myself. I'm a fan.</p></div></td>
             <td><div class="product-title">{items.price}</div></td>
             <td><div class="product-title">
            
      <input type="number" value={quantity[index] || 1}  onChange={(e) => { getQuantity(e, index); addsum(items)}} min="1"/></div>
    </td>
    <td> <button class="product-title">
        Remove
      </button></td>
      <td><div class="product-title">{quantity[index]*items.price || items.price}</div></td>
          </tr>
        
         
        )) }
       
      
   
          </tbody>
      </table>

      <div class="totals">
    <div class="totals-item">
      <label>Subtotal</label>
      <div class="totals-value" id="cart-subtotal">{Sum}</div>
    </div>
    <div class="totals-item">
      <label>Tax (5%)</label>
      <div class="totals-value" id="cart-tax">3.60</div>
    </div>
    <div class="totals-item">
      <label>Shipping</label>
      <div class="totals-value" id="cart-shipping">{Sum*0.5}</div>
    </div>
    <div class="totals-item totals-item-total">
      <label>Grand Total</label>
      <div class="totals-value" id="cart-total">{Sum>100?Sum:Sum+20}</div>
    </div>
    
    <button onClick={ order} >Checkout</button>
   
    {orderIds && ( // Render Link only if orderId is truthy
        <Link to={{ pathname: "/payment"}} >
          Continue to Payment
        </Link>
      )}
  </div>
      
      
        </div>
        </div>
   
    
)
}
export default Cart;
