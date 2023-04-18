import { createSlice } from "@reduxjs/toolkit";


//Redux Slice create for cart page
export const CartSlice = createSlice({
    name:"cart",
    initialState:[],    
   
//we have only two function in project: add() function for Add to cart button,remove() delete button to remove product from cart 
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
            
//loc11,12:add takes two statement state,action. State is initial empty array so push post or product when add(action.payload is post) loc 15 product.jsx 
        },
     
    remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },}
});

//loc18:its takes state,now state me item store hai so item pass now we check if cart item ki id is not equal to post.id (action.payload its method to acces data wch pass loc20in product.js) k then return kr denge wapas home page me after REMOVE ITEM Button click , 
//filter is bascially to search and after check , its remove or return.


//get add, remove function from slice to pass it on store.js Centralized or global Store me
export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;


//loc18: Home me each product ko post.id k through represnt kiya gya hai 