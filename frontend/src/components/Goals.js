import React from 'react';
import "./Goals.css"

const Goals=props=>
{
    return(
        <form>
            <input type='text'></input>
            <br></br>
            <button className='butt' value='amey'></button>
            <ul>
                {
                  props.goals.map(goa=>{
                   return <li>{goa}</li>
                  })
                  }

            
            </ul>
        </form>
    )
}
export default Goals