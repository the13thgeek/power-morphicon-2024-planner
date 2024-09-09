import React from 'react';
import './Heading.scss';

const Heading = ({children}) => {
  return (
    <header className='app-heading'>
        {children}
    </header>
  )
}

export default Heading