import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";



function Cart() {

   //get cart data value from CartSlice.js se by use of useSelector in Cart page 
  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

   
 useEffect( () => {
  setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );  {/*Total Amount calculate: cart pe reduce function lagaye ,acc is accumlator ,crr is current price of item , 0 initial is compulsory to given*/ }
    }, [cart])  
  //loc19:whenever cart is update then useEffect me setTotalAmount function called and inside product value is calculate 


  return (
    <div className="">
      {cart.length > 0 ?        //if cart length is greater then 0 means cart me product add kiya gya hai by user, length is no of prduct count
      (
       <div className="flex mx-auto flex-row justify-center max-w-6xl ">
         <div className="w-[60%]">
        {
        cart.map((item, index) => {
          return (
          <CartItem key={item.id} item={item} itemIndex={index}/>
              );
            })
            }
          </div>
{/*So that whenever a change is made to a CartItem component, react can uniquely identify it & render accordingly, item is single product
 it is because if an item gets added or deleted from the array/list,so we have to pass id (if we dont pass it rennder all list item from starting)and index is not compulsory ,its optional*/}

   <div className="flex flex-col w-full md:w-[40%] mt-3">
      <div className="flex flex-col p-5 gap-5 my-14 h-full justify-between">
         <div className="flex flex-col gap-2">
                <div className="font-semibold text-xl text-green-800">
                  Your Cart
                </div>
                <div className="font-semibold text-5xl text-green-700">
                  Summary
                </div>
                <p className="text-xl py-3">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>
   <div className="flex flex-col">
       <p className="text-xl font-bold">Total Amount :${totalAmount}</p>
          
      <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear
      mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
         </div>
           
        </div>
          </div>
        </div>
      ) :
       (
     <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-gray-700 font-semibold text-2xl mb-2">Your cart is empty 😣!</h1>
         
     <Link to={"/"}>
      <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear 
      mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wide">
      Shop Now</button>
      </Link>
        
        </div>
      )}
    </div>
  );
};
export default Cart;
