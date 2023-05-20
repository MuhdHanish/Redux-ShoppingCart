import React from 'react'
import "./CartButtons.css"

const AfterCart = () => {
  return (
    <div className="after-cart">
     <button className="cart-count-button">-</button>
     <div className="cart-counter">1</div>
     <button className="cart-count-button">+</button>
    </div>
  )
}

export default AfterCart