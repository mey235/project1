import React  from "react";
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { UserChangeContext } from "./Usercontext";
import "./footer.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faInstagram,faWhatsapp} from "@fortawesome/free-brands-svg-icons"
const Footer = ()=>
{
    return(
    <footer>
        <div class="footer">
        
        
        <div class="row" >
        <ul>
       <li><a href="#" ><i><FontAwesomeIcon icon={faFacebook} /></i></a></li>
       <li><a href="#"><i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
       <li><a href="#"><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
       <li><a href="#"><i><FontAwesomeIcon icon={faWhatsapp} /></i></a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Our Services</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Career</a></li>
        <li><a href="#">Career</a></li>
        </ul>
        </div>
        
        <div class="row">
        © 2023 NB GROCERIES  All rights reserved.|Privacy Policy|Terms of Use|Home Delivery Number - 8880077745|email - ameynimbalkar83@gmail.com
        </div>
        </div>
        </footer>)
}
export default Footer