"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { cartTotal } from "../store/feachers/counterSlice";

const Header = () => {
  const { totalQuantatai,cart } = useSelector((state) => state.cartItem);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartTotal());
  }, [cart]);

  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-bold">FOODAY</div>
        <ul className="flex gap-3">
          <li>
            <Link href="#" className="px-3 py-5 text-black block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/cart" className="px-3 py-5 text-black block relative ">
              <BsCart3 size={24} />
              <div className="w-[22px] h-[22px] bg-black rounded-full absolute right-1  top-2 text-white flex justify-center items-center text-sm">
                {totalQuantatai}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
