"use client";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    cart:typeof window !== 'undefined' && localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [],
    totalPrice: 0,
    totalQuantatai: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (isExist >= 0) {
        state.cart[isExist].quantatay += 1;
        toast.success("Cart Item Increment", {
          className: "border border-green-500 font-medium",
        });
      } else {
        state.cart.push({ ...action.payload, quantatay: 1 });
        toast.success("Cart Added Successfull", {
          className: "border border-green-500 font-medium",
        });
      }

      localStorage.setItem("cartItem", JSON.stringify(state.cart));
    },

    cartDecrement:(state,action)=>{
      const isExist = state.cart.findIndex(item =>item._id === action.payload)
      if(state.cart[isExist].quantatay > 1){
        state.cart[isExist].quantatay -= 1
      }

      localStorage.setItem("cartItem",JSON.stringify(state.cart))
    },

    cartDelete :(state,action)=>{
      state.cart = state.cart.filter(item =>item._id !== action.payload)
      localStorage.setItem("cartItem",JSON.stringify(state.cart))
    },

    clearCart:(state,action)=>{
      state.cart = []
      localStorage.removeItem("cartItem")
    },

    cartTotal:(state,action)=>{
     const {total,quantatai} =  state.cart.reduce((totalItem,currentItem)=>{
        totalItem.total += currentItem.price * currentItem.quantatay;
        totalItem.quantatai += currentItem.quantatay;

        return totalItem;
      },{total:0,quantatai:0})
      state.totalPrice = total;
      state.totalQuantatai = quantatai;
    }


  },
});

export const { addToCart,cartDecrement,cartDelete,clearCart,cartTotal } = counterSlice.actions;

export default counterSlice.reducer;
