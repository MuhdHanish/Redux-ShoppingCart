import React from 'react';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Shopping Cart</h1>
        <FontAwesomeIcon icon={faCartShopping} shake size='2xl' />
      </div>
    </header>
  );
};

export default Header;
