import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";
import ItemCart from './ItemCart';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../redux/CartSlice';
import emptyCart from '../assets/emptyCart.gif'
import { Link } from 'react-router-dom';

const Cart = () => {
    const activeCart = useSelector(state => state.cart.showCart);
    const cartItems = useSelector((state)=> state.cart.cart)
    const dispatch = useDispatch();
    const handleCartToggle = () => {
        dispatch(toggleCart()); 
      };

      const totalQty = cartItems.reduce((totalQty,item)=> totalQty + item.qty, 0)

      const totalPrice = cartItems.reduce((totalPrice,item)=> totalPrice + item.price * item.qty, 0)
    
  return (
    <div className={`fixed right-0 top-0 h-full w-[100%] sm:w-[20vw] transition-all duration-500 ease-in-out bg-white z-10 p-4 ${activeCart ? 'translate-x-0 ' : 'translate-x-full '}`}>
        <div className='flex justify-between items-center font-bold text-2xl '>
            <h1>My Order</h1>
            <MdCancel onClick={()=> handleCartToggle()} className='cursor-pointer' />
        </div>


        <div className='sm:max-h-[65vh] max-h-[70vh] no-scrollbar scroll-smooth overflow-y-scroll'>

            { cartItems.length > 0 ?
                cartItems.map((food)=><ItemCart key={food.id} food={food} />) : <div className='mt-20'><img src={emptyCart} alt="" /></div>
            }
            
            
       
        </div>

        

        <div className='absolute bottom-7'>
            <h1 className='font-semibold'>Items : {totalQty}</h1>
            <h1 className='font-semibold'>Total Amount : {totalPrice}</h1>
            <hr className='my-3 bg-black h-[1px] sm:h-[2px]' />
        <Link to='/success'> <button className='btn btn-success w-[90vw] sm:w-[18vw]'>Place Order</ button>  </Link>   
        </div>
    </div>
  )
}

export default Cart