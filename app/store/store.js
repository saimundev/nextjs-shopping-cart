"use client";

import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feachers/counterSlice';

export const store = configureStore({
  reducer: {
    cartItem:counterSlice
  },
})