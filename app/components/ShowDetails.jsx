"use client";

import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/feachers/counterSlice";
import { Toaster } from 'react-hot-toast';
const ShowDetails = ({ itemData }) => {
  const dispatch = useDispatch();

  const hanldeAddToCart = () => {
    dispatch(addToCart(itemData));
  };

  return (
    <div className="grid grid-cols-2 container mx-auto gap-6">
      <Image
        width={500}
        height={500}
        alt="image"
        src={itemData?.image}
        className="w-full h-[500px] rounded"
      />
      <div className="mt-10">
        <h1 className="text-2xl font-bold">{itemData?.name}</h1>
        <h2 className="text-xl text-green-500 font-medium py-2">
          {itemData?.price}
        </h2>
        <p>
          <span className="text-green-500 font-semibold">Brand:</span>{" "}
          {itemData?.brand}
        </p>
        <p className="mt-2">Decreption:</p>
        <p className="text-sm">{itemData?.overview}</p>
        <button
          onClick={hanldeAddToCart}
          className="bg-green-500 px-6 py-2 rounded text-white font-medium block mt-5 hover:bg-green-700 duration-300"
        >
          Add To Cart
        </button>
        <Toaster/>
      </div>
    </div>
  );
};

export default ShowDetails;
