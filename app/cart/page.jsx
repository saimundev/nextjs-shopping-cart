"use client";

import Image from "next/image";
import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cartDecrement,
  cartDelete,
  cartTotal,
  clearCart,
} from "../store/feachers/counterSlice";
import { useRouter } from "next/navigation"

const Cart = () => {
  const { cart,totalPrice } = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(()=>{
    dispatch(cartTotal())
  },[cart])

  //cart incremetn
  const handleInc = (item) => {
    dispatch(addToCart(item));
  };

  //cart decrement
  const handleDec = (id) => {
    dispatch(cartDecrement(id));
  };

  //cart delete
  const cartDeleteItem = (id) => {
    dispatch(cartDelete(id));
  };

  //clear cart
  const removeCart = () => {
    dispatch(clearCart());
  };

    //redirect page
  const handleClick = ()=>{
    router.push("/")
  }
  return (
    <div className="container mx-auto">
      {cart.length >0 && (
        <div className="grid grid-cols-6 text-center border-b border-gray-300 pb-3 mb-4">
          <div className="text-lg font-semibold">Image</div>
          <div className="text-lg font-semibold">Name</div>
          <div className="text-lg font-semibold">Price</div>
          <div className="text-lg font-semibold">Quantatay</div>
          <div className="text-lg font-semibold">Delete</div>
          <div className="text-lg font-semibold">Total</div>
        </div>
      )}
      <div className="">
        {cart.length > 0 ? (
          cart?.map((item) => (
            <div className="grid grid-cols-6 items-center justify-items-center mb-4" key={item._id}>
              <Image width={100} height={50} alt="image" src={item.image} />
              <h1>{item.name}</h1>
              <h2>${item.price}</h2>
              <div className="">
                <div className="flex items-center border border-black rounded">
                  <button
                    onClick={() => handleDec(item._id)}
                    className="bg-black text-white font-semibold flex-1 px-6 py-1"
                  >
                    -
                  </button>
                  <h1 className="px-6">{item.quantatay}</h1>
                  <button
                    onClick={() => handleInc(item)}
                    className="bg-black flex-1 text-white font-semibold px-6 py-1"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mx-auto">
                <button
                  onClick={() => cartDeleteItem(item._id)}
                  className="bg-red-500 text-white px-6 py-2 rounded"
                >
                  DELETE
                </button>
              </div>
              <div className="">$ {item.price * item.quantatay}</div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <div className="text-center text-2xl font-medium  mt-20 text-gray-700">Your Cart Is Empty</div>
            <button onClick={handleClick} className="bg-red-500 px-6 py-2 rounded text-white mt-2">Continue Shopping</button>
          </div>
        )}

        {cart.length > 0 && (
          <div className="border-t border-gray-300 flex justify-between">
           <div className="">
           <button
              onClick={removeCart}
              className="border border-red-500 px-6 py-2 mt-2 rounded text-black font-medium hover:bg-red-500 hover:text-white duration-500"
            >
              Clear cart
            </button>
           </div>
            <div className="mt-2">
              <h1 className="text-2xl font-semibold mr-4">Total Price : ${totalPrice}</h1>
             <div className="text-right">
             <button  className="bg-indigo-500 px-8 py-3 mt-4 rounded text-white font-medium hover:bg-indigo-700 hover:text-white duration-500 mr-3">
                CheckOut
              </button>
             </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
