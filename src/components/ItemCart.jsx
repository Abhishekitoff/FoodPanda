import React from "react";
import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
import { incrementQty, decrementQty } from "../redux/CartSlice";
import toast from "react-hot-toast";

const ItemCart = ({ food, qty }) => {
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    dispatch(removeFromCart({ id: food.id }));
  };

  const handleDecrement = () => {
    if (food.qty > 1) {
      dispatch(decrementQty({ id: food.id }));
    }
  };

  return (
    <div className="flex items-center sm:gap-x-4 gap-x-10 leading-tight p-2 shadow-lg mb-3">
      <img
        src={food.img}
        alt=""
        className="sm:h-[60px] sm:w-[60px] h-20 w-20 object-contain "
      />
      <div>
        <div className="flex w-full justify-between gap-10 items-center mb-2">
          <h1 className="font-semibold text-xl sm:text-sm">{food.name} </h1>
          <MdDelete
            onClick={() => {
              handleDeleteItem();
              toast.error(`${food.name} Removed`);
            }}
            className="cursor-pointer text-xl"
          />
        </div>

        <div className="flex justify-center items-center gap-10">
          <p className="font-semibold text-xl text-green-400">${food.price}</p>

          <div className="flex items-center justify-center gap-x-1">
            <FaMinus
              onClick={() => handleDecrement()}
              className="border border-black text-xl hover:bg-red-400 cursor-pointer"
            />
            <span className="font-semibold text-green-400 text-xl">
              {food.qty}
            </span>
            <FaPlus
              onClick={() => dispatch(incrementQty({ id: food.id }))}
              className="border border-black text-xl hover:bg-green-400 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
