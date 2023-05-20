import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Shopping Cart</h1>
        <div className="icon-container">
          <FontAwesomeIcon icon={faCartShopping} size="2x"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
