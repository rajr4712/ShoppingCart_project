import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

export const store = configureStore({
   
    //one slice store name is cartSlice in cart
    reducer:{
        cart: CartSlice.reducer,
    }
});