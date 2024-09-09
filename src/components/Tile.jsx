import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tile.scss';

const Tile = ({ children, className = null, linkTo = null }) => {

  const navigate = useNavigate();

  const goTo = () => {
    if(linkTo) {
      navigate(linkTo);
    }
    
  }

  if(linkTo) {
    return (
      <button className={`tile ${className}`} onClick={linkTo ? goTo : undefined}>
          {children}
      </button>
    )
  } else {
    return (
      <div className={`tile ${className}`} onClick={linkTo ? goTo : undefined}>
          {children}
      </div>
    )
  }

  
}

export default Tile