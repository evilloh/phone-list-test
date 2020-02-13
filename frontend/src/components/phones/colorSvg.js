import React from 'react';
export default (color) => {
  return (
    <svg height="30" width="30">
    <circle cx="15" cy="15" r="10" stroke="black" strokeWidth="1" fill={color.color} />
      Sorry, your browser does not support inline SVG.  
    </svg> 
  )
}
