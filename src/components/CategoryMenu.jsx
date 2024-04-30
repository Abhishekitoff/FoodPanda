import React, { useEffect, useState } from 'react'
import foodData from '../foodData/FoodData.js'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/CategorySlice.jsx'


const CategoryMenu = () => {
  const [category, setcategory] = useState([])

  const listuniqueCareogry =()=>{
   const uniqueCareogry = [ ...new Set(foodData.map((food)=>food.category))]
   setcategory(uniqueCareogry);
   console.log(uniqueCareogry);
  }

  useEffect(() => {
    listuniqueCareogry()
   
  }, [])

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state)=> state.category.category)
  
  return (
    <div className='px-5 sm:mt-0 mt-4'>
        <div >
            <div className='flex justify-between items-center'>
            <h3 className='text-xl font-semibold mb-2'>Find the Best Food</h3>
            <h3 className='sm:text-xl text-xs font-semibold mb-2'>{new Date().toUTCString().slice(0,16)}</h3>
            </div>
            <div className='flex gap-1 overflow-x-scroll scroll-smooth  no-scrollbar'>
            <button onClick={()=>dispatch(setCategory("All"))}  className={`btn btn-outline  ${selectedCategory=== "All" && 'bg-green-300 '}`}>All</button>
           
            {
              category.map((category,index)=>{
                return <button onClick={()=>dispatch(setCategory(category))} key={index} className={`btn btn-outline  ${selectedCategory=== category && 'bg-green-300'}`}>{category}</button>
              })
            }
            </div>
            
        </div>
    </div>
  )
}

export default CategoryMenu