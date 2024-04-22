import React  from "react";
import "./paymentoptions.css"
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { UserChangeContext } from "./Usercontext";


const Paymentoptions =()=>
{
 
    return(
        <div className="containered">
          <h4>Choose payment method below</h4>
         <h2 style={{marginBottom:"30px", marginTop:"30px"}}>Payment</h2>
         <div style={{display:"flex"}} >
         <div className="type">
         Pay with Razorpay
         </div>
         <div className="type">
        <a onClick={() => console.log("adadsdfsdf")}> Pay with GooglePay </a>
         </div>
         </div>
        </div>
    )
}
export default Paymentoptions;