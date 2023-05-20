import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const {cartList} = useSelector((state)=>state.cart)
  return (
    <header>
      <div className="container">
        <h1>Shopping Cart</h1>
        <div className="right-section">
          <div className="icon-container">
            <div className="cart-count-header">{cartList?.length}</div>
            <FontAwesomeIcon icon={faCartShopping} size="2x" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
