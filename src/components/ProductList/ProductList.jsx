import React from 'react'
import "./ProductList.css"
import products from '../../api/products.json'

const ProductList = () => {
  return (
    <section className='container'>
     {
      products.map((product,key)=>(
      <div className="main-container">
        <img src={product?.image} alt="" />
        <h3>{product?.title}</h3>
        
      </div>
      ))
     }
    </section>
  )
}

export default ProductList