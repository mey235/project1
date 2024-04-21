import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import side from "./sidebar.module.css"
import { useSearch } from "./pages/search"
import im from "./sideicon.jpg"
import { useEffect } from "react";
import { useRef } from 'react';
const Sideb=({data,onset})=>
{
   const{updateSearchQuery}= useSearch();
   const {searchQuery} = useSearch();
     console.log(data)
     const Value=async (e)=>
     {

       
     await updateSearchQuery(e.target.dataset.value)
     console.log(e.target.dataset.value)

     }
   return(
    <div   className={`${side.sidebar} ${data?side.open:''}`} id="doe">
        <button onClick={onset} className={side.bute}>&times;</button>
           <Link data-value="soaps" onClick={(e) => Value(e)}>soaps
                </Link>
                
                
                <Link to="/Categories/Fruits">Fruits
                </Link>
            
                <Link to="/Categories/Vegetables">Mutton
                </Link>
            
                <Link to="/Categories">About
                </Link>
            
    </div>
   )
}
export default Sideb;