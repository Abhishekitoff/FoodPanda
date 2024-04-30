import React from "react";
import FoodCard from "./FoodCard";
import data from "../foodData/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const handleTost = (name) => toast.success(`Added ${name} to cart`);
  const category = useSelector((state)=>state.category.category)

  const search = useSelector((state)=>state.search.search)



  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex items-center sm:justify-start flex-wrap gap-6 mx-5 justify-center my-5">
        {
        
        
        /* {data.map((item, index) => {
          return
        })} */
        
        data.filter((item)=>{
          if(category === 'All'){
            return item.name.toLowerCase().includes(search.toLowerCase());
          }
          else {
           return category === item.category && item.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((item,index)=>( <FoodCard key={index} item={item} handleTost={handleTost} />))
        
        
        }
      </div>
    </>
  );
};

export default FoodItems;
