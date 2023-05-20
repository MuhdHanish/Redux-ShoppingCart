import React from 'react'
import "./ProductList.css"
import products from '../../api/products.json'
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'

const ProductList = () => {
  return (
    <section className='container'>
     {
      products.map((product,key)=>(
      <div className="product-container">
        <img src={product?.image} alt="" />
        <h3>{product?.title}</h3>
        <BeforeCart/>
        <AfterCart/>
      </div>
      ))
     }
    </section>
  )
}

export default ProductList