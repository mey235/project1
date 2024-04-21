import React  from "react";
import "./aboutus.css"
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { UserChangeContext } from "./Usercontext";
import img from "../images"

const About =()=>
{
    return(
        
        <div>
         <div className="aboutus">
            About Us
            <img src={img.fruitplate} style={{width:"400px",height:"200px",float:"left",zIndex:1,position:"relative",top:"60px"}}></img>
         <div className="p1">
       
         </div>

            </div>   
<p style={{marginTop:"90px",fontSize:"20px",fontFamily:"sans-serif"}}>
<p>
Welcome to NB Groceries, your one-stop destination for all your culinary needs!

At NB Groceries, we're passionate about providing the freshest, highest quality ingredients to our customers. Whether you're a seasoned chef, a busy parent, or someone just looking to whip up a delicious meal, we've got you covered.

What sets us apart? It's our commitment to excellence in every aspect of what we do. From sourcing the finest produce to ensuring prompt delivery, we strive to exceed your expectations at every turn.
</p>
Founded with a vision to revolutionize the way you shop for groceries, NB Groceries is more than just an online store – it's a culinary experience. We believe that great food starts with great ingredients, and that's why we work tirelessly to bring you a curated selection of products that meet our stringent standards for quality and taste.

But NB Groceries is more than just a place to shop. It's a community of food lovers, brought together by a shared passion for cooking and eating well. Whether you're looking for recipe inspiration, cooking tips, or just want to connect with like-minded individuals, you'll find a warm welcome here.

Thank you for choosing NB Groceries. We're honored to be a part of your culinary journey, and we look forward to serving you for years to come.

Happy cooking!

The NB Groceries Team
</p>
        </div>
    )
}
export default About;