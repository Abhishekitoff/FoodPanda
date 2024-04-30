import React from "react";
import logo from '../assets/logo.png'
import { toggleCart } from "../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const totalQty = useSelector((state) => {
    return state.cart.cart.reduce((totalQty, item) => totalQty + item.qty, 0);
  });


  const handleCartToggle = () => {
    dispatch(toggleCart());
  };



  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="text-2xl  font-bold cursor-pointer sm:block hidden">Food <span className="text-pink-600">Panda</span> </a>
        <a className="text-xl cursor-pointer  sm:hidden block"><img className="h-12" src={logo} alt="" /></a>
       
      </div>
      <div className="flex-none gap-5">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-40  md:w-64   "
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
        </div>
        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" onClick={()=>handleCartToggle()} className="btn btn-ghost btn-circle">
            <div className={`indicator ${ totalQty > 0 && 'animate-bounce delay-500 transition-all'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-7 w-7 `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalQty > 0 && (
                <span className="badge badge-sm indicator-item">{totalQty}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
