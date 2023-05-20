import React, { useState } from "react";
import "./ProductList.css";
import products from "../../api/products.json";
import BeforeCart from "./CartButtons/BeforeCart";
import AfterCart from "./CartButtons/AfterCart";

const ProductList = () => {
  const [count, setCount] = useState(0);
  const addToCart = () => {
    setCount(1);
  };
  return (
    <section className="container">
      {products.map((product, key) => (
        <div className="product-container">
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
          {count > 0 ? <AfterCart /> : <BeforeCart addToCart={addToCart} />}
        </div>
      ))}
    </section>
  );
};

export default ProductList;
