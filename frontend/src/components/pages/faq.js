import React  from "react";
import "./aboutus.css"
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { UserChangeContext } from "./Usercontext";
import img from "../images"
import { pink } from "@mui/material/colors";
import { rgbToHex } from "@mui/material";

const FAQ =()=>
{
    return(
        <div style={{marginTop:"30px"}}>
        <p style={{borderBottom:"1px solid black",color:'#ec407a'}}>FREQUENTLY ASKED QUESTIONS</p>
       <p style={{color:"#f48fb1"}}> How do I place an order?</p>
      <p>To place an order, simply browse our website, add the desired items to your shopping cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information, and then confirm your order.</p> 
       <p style={{color:"#f48fb1"}}> What payment methods do you accept?</p>
       <p>We accept various payment methods, including credit/debit cards, PayPal, Apple Pay, Google Pay, and bank transfers. You can choose the option that is most convenient for you during checkout.</p> 
       <div>
    <p style={{color:"#f48fb1"}}>Is it safe to shop on your website?</p>
    <p>Yes, shopping on our website is safe and secure. We utilize industry-standard encryption technology to protect your personal and payment information, ensuring that your data remains private and secure.</p>
</div>

<div>
    <p style={{color:"#f48fb1"}}>How can I track my order?</p>
    <p>Once your order has been shipped, you will receive a tracking number via email or SMS. You can use this tracking number to monitor the status and location of your package on our website or the shipping carrier's website.</p>
</div>

<div>
    <p style={{color:"#f48fb1"}}>What is your return policy?</p>
    <p>We offer a hassle-free return policy. If you are not satisfied with your purchase for any reason, you can return it within [X] days of receipt for a refund or exchange. Please refer to our Returns & Exchanges page for detailed instructions.</p>
</div>

<div>
    <p style={{color:"#f48fb1"}}>Do you offer international shipping?</p>
    <p>Yes, we offer international shipping to select countries. Shipping rates and delivery times may vary depending on your location. You can view the available shipping options during checkout.</p>
</div>

<div>
    <p style={{color:"#f48fb1"}}>What should I do if I receive a damaged or incorrect item?</p>
    <p>If you receive a damaged or incorrect item, please contact our customer support team immediately. We will gladly assist you with arranging a replacement or refund for the affected item.</p>
</div>

<div>
    <p style={{color:"#f48fb1"}}>How long does shipping take?</p>
    <p>Shipping times vary depending on your location and the shipping method selected. Standard shipping typically takes [X] business days, while expedited shipping options are available for faster delivery.</p>
</div>

<div>
    <p style={{color:"#f48fb1"}}>Can I change or cancel my order after it's been placed?</p>
    <p>We strive to process orders quickly, so changes or cancellations may not always be possible once an order has been placed. Please contact us as soon as possible if you need to modify or cancel your order, and we will do our best to accommodate your request.</p>
</div>


        </div>
    )
}

export default FAQ;

        