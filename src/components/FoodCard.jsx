import React from "react";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const FoodCard = ({item, handleTost}) => {

  const dispatch = useDispatch();

  return (
    <div className="card card-compact w-60 bg-base-100 shadow-xl">
      <figure>
        <img
          src={item.img}
          alt="Shoes"
          className="h-28"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{item.name}</h2>
          <h2 className="card-title text-green-400">${item.price}</h2>
        </div>
        <p>{item.desc.slice(0,50)}...</p>
        <div className="card-actions flex justify-between items-center">
          <div className="flex items-center justify-center">
            <IoIosStar />
            <p>{item.rating}</p>
          </div>
          <button onClick={()=>{
            dispatch(addToCart(item))
            handleTost(item.name)
          }} className="btn btn-success">Add to cart</button>
        </div>
        
      </div>
    </div>
  );
};

export default FoodCard;
