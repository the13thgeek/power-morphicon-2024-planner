import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; {(new Date().getFullYear())} the13thgeek&trade;. All rights reserved.</p>
    </footer>
  )
}

export default Footer