import React from 'react'

function Avatar({imgUrl, firstName, lastName}) {
  return (
    <div style={{border:'1px solid black', margin:'1rem' , padding:'0.2 rem'}} >
        <h3>{firstName} {lastName}</h3>
        <img alt='#' src={imgUrl} />
    </div>
  );
}

export default Avatar;