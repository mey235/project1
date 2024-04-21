import React from "react";
import { useParams } from "react-router-dom";
const Be=()=>
{
    const {category}=useParams();
    console.log(category)
  return(
    <div>
        <h2>{category}</h2>
        </div>
        
      
  )
}
export default Be;