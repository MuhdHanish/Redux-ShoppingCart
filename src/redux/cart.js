import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk('cart/fetchUser',async(id)=>{
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  console.log(response.data)
   return response.data
})

const INITIAL_STATE = {
   cartList: [],
   userDetail:[]
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
   },
   extraReducers:{
      [fetchUser.pendig]:(state,action)=>{},
      [fetchUser.fulfilled]:(state,action)=>{
         state.userDetail.push(action.payload)
         console.log('success')
      },
      [fetchUser.rejected]:(state,action)=>{}
   }
})

export const { addToCart, increment, decrement } = cartSlice.actions
export default cartSlice.reducer