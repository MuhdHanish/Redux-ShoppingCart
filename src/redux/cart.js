import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
   cartList: []
}

const cartSlice = createSlice({
   name: 'cart',
   initialState: INITIAL_STATE,
   reducers: {
      addToCart: (state, action) => {
         const itemExist = state.cartList.find((item) => item?.id === action?.payload?.id)
         if (itemExist) {
            const productId = action.payload?.id
            state.cartList.forEach((item) => {
               if (item?.id === productId)
                  item.count=1
            })
         } else {
            state.cartList.push({
               ...action.payload,
               count: 1
            })
         }
      },
      increment: (state, action) => {
         const productId = action.payload
         state.cartList.forEach((item) => {
            if (item?.id === productId)
               item.count++
         })
      },
      decrement: (state, action) => {
         const productId = action.payload
         state.cartList.forEach((item) => {
            if (item?.id === productId)
               item.count--
         })
      }
   }
})

export const { addToCart, increment, decrement } = cartSlice.actions
export default cartSlice.reducer