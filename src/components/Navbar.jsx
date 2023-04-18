import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import React from "react";



function Navbar() {
   
//get cart state value from CartSlice.js se by help of useSelector coz hme cart icon k upar value show karana hai when user Add a item in cart
  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="ml-5">
          <img src="https://imgs.search.brave.com/1PX49BE1nFTLlIi_50IJqEo8Je-phA-GHG6svP_UKv8/rs:fit:700:222:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvZWNvbW1l/cmNlLWxvZ28tcG5n/LTExLnBuZw" className="h-16 w-full"/>     {/*Ecomzy shopping ki log*/}
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

          <NavLink to="/cart">
             <div className="relative">
               <FaShoppingCart className="text-2xl"/>
                 {
                  cart.length > 0 &&
                  <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                   justify-center items-center animate-bounce rounded-full text-white">
                    {cart.length}</span>        //if item added then display on cart icon pe dts y cart.length nikale 
                  }
               </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
