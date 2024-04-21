import * as React from 'react';
import "./payment.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function PaymentComplete()
{
  const location = useLocation();
  const orderId = location.state
  console.log(location.state)
  if (!orderId) {
    return <div>Loading...</div>; // Or handle the case where orderId is not available
  }
    const openRazorpay=async(req,res)=>
    {
        
  const options = {
  
    currency: 'INR',
    name: 'Your Company Name',
    description: 'Payment for your product/service',
    image: 'url_to_your_logo',
    order_id: orderId,
    method: 'upi',
    handler: (response) => {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: 'Your Name',
      email: 'your.email@example.com',
      contact: '1234567890',
    },
  };
          const paymentwindow = new window.Razorpay(options)
          paymentwindow.open();
        }
        
    
    return(
        <div>
          
          <div className="containered">
          <h4>Choose payment method below</h4>
         <h2 style={{marginBottom:"30px", marginTop:"30px"}}>Payment</h2>
         <div style={{display:"flex"}} >
         <div className="type">
         Pay with Razorpay
         </div>
         <div className="type">
        <a onClick={openRazorpay}> Pay with GooglePay </a>
         </div>
         </div>
        </div>
       
      </div>
                 
    );
    }