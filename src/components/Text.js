import React from 'react'
import photo from "../images/nature.jpg";
import "./Text.css";

export default function Text() {
  return (
<div className='wrapper'>
    <img src={photo} alt="" className='wrapper-image'/>

    <div className='wrapper-text'>
        <h2> 
             Create 
        </h2> 
        <br/>
        <h2>
            Your Offer letter 
        </h2>
        <br/>
        <h2>
            Here
        </h2>
    </div>

   
</div>
  )
}
