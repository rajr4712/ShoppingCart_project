import React from "react";
import {FcDeleteDatabase} from "react-icons/fc"
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


function CartItem({item, itemIndex,cartLength}) {
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));                   //now calling a reducer function wch is in cartSlice.jsx by dispatch function where item id pass kr k jis item pe click remove
    toast.success("Item Removed");              //after remove tost show !
  }

   return (
    <div className="w-full flex flex-col p-1">
      
    <div className="w-full flex items-center p-2 md:p-5 justify-between mt-1 mb-2 md:mx-5">
        <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center w-full">
          
      <div className="w-[30%]">
        <img src={item.image} alt={item.name} className="object-cover"/> </div>
          <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
            
        <h1 className="text-xl text-slate-700 font-semibold">
              {item.title}
            </h1>
           
         <h1 className="text-base text-slate-700 font-medium">
              {item.description.split(" ").slice(0, 15).join(" ") + "..."}
            </h1>
           
            <div className="flex items-center justify-between">
              <p className="font-bold text-lg text-green-600">${item.price}</p>
            
      {/*for delete button*/}  
       <button onClick={removeFromCart}
      className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer
       rounded-full p-3 mr-3">
    <MdDelete className="text-red-800 group-hover:text-white h-[1rem] w-[1rem]" />
  
      </button>
           
       </div>
       </div>
      </div>
      </div>
     
    </div>
  );
};

export default CartItem;
