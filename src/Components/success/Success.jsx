import React from 'react';
import "./success.css";

const Success=()=>{
    return(
        <>
        <div className='mainDiv'>
        <div className="successCard">
  <div className='innerDiv'>
    <i className="checkMark">✓</i>
  </div>
  <h1 className='success'>Success</h1>
  <p className='message'>
    We received your booking request;
    <br /> we'll be in touch shortly!
  </p>
</div>
</div>

 </>
    )
}

export default Success;