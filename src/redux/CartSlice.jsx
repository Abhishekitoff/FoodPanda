import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    showCart: false
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item)=> item.id === action.payload.id);
      if(existingItem){
        
        existingItem.qty += 1;
      }
      else{
        state.cart.push({ ...action.payload, qty: 1 });
      }
     
    },
    removeFromCart: (state, action) => {
   
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    toggleCart: state => {
      state.showCart = !state.showCart;
    },
    incrementQty:(state, action)=>{
      state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item, qty:item.qty+1}: item)
    },
    decrementQty:(state, action)=>{
      state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item, qty:item.qty-1}: item)
    }
  },
});


export const { addToCart, removeFromCart, toggleCart, incrementQty, decrementQty } = cartSlice.actions;

export default cartSlice.reducer;
