import React, { useMemo } from 'react'
import AfterCart from './AfterCart'
import BeforeCart from './BeforeCart'
import { useSelector } from 'react-redux'

const CartButtons = ({product}) => {
 const {cartList} = useSelector((state)=>state.cart)
 const cartCount = useMemo(()=>cartList?.find((item)=>item?.id===product?.id)?.count,[cartList,product])
  return (
    <>
   {cartCount>0?<AfterCart cartCount={cartCount} productId={product?.id}/>:<BeforeCart product={product}/>} 
    </>
  )
}

export default CartButtons