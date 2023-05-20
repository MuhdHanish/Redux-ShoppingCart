import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE  ={
 cartList:[],
 cartCount:0
}

const cartSlice = createSlice({
 name:'cart',
 initialState:INITIAL_STATE,
 reducers:{
    addToCart: (state,action) =>{
     state.cartCount = 1 
    },
    increment: (state,action) =>{
     state.cartCount +=1
    },
    decrement: (state,action) =>{
     state.cartCount -=1
    }
 }
})

export const {addToCart,increment,decrement} = cartSlice.actions
export default cartSlice.reducer